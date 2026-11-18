/**
 * Concept map (/mapa): draws /mapa.json (built from the topics by utils/conceptGraph.ts) as a
 * force-directed graph on a canvas. Nodes are coloured by topic; clicking one opens a panel with
 * links to its page in the book PDF and on the web. Pan and zoom with d3-zoom, drag nodes with d3-drag.
 */
import { forceSimulation, forceLink, forceManyBody, forceCollide, forceX, forceY } from "d3-force";
import { select } from "d3-selection";
import { zoom, zoomIdentity } from "d3-zoom";
import { drag } from "d3-drag";
import { prepare } from "../utils/searchMatch";

const KIND = { definicion: "Definición", teorema: "Teorema" };
// Golden-angle hues: consecutive topics get clearly different colours.
const hue = (i) => Math.round((i * 137.508) % 360);
const isDark = () => document.documentElement.getAttribute("data-theme") === "dark";
const topicColor = (i) => `hsl(${hue(i)} ${isDark() ? "70% 64%" : "62% 44%"})`;

let cleanup = null;

async function init() {
    const canvas = document.getElementById("conceptMap");
    if (!canvas) return;
    cleanup?.();
    const data = await (await fetch("/mapa.json")).json();
    if (!canvas.isConnected) return;

    const byId = new Map(data.nodes.map((n) => [n.id, n]));
    const links = data.links.map(([a, b]) => ({ source: byId.get(a), target: byId.get(b) }));
    const neighbours = new Map(data.nodes.map((n) => [n, new Set()]));
    for (const l of links) {
        neighbours.get(l.source).add(l.target);
        neighbours.get(l.target).add(l.source);
    }
    for (const n of data.nodes) {
        const d = neighbours.get(n).size;
        n.r = n.type === "group" ? 11 : n.type === "topic" ? 7 + Math.sqrt(d) * 0.6 : Math.min(3 + Math.sqrt(d) * 0.9, 9);
        n.search = prepare(n.label);
    }

    const ctx = canvas.getContext("2d");
    let width = 0, height = 0, transform = zoomIdentity, hovered = null, selected = null;
    const style = getComputedStyle(document.documentElement);
    const css = (name) => style.getPropertyValue(name).trim();
    const font = css("--font-family");

    const sim = forceSimulation(data.nodes)
        .force("link", forceLink(links)
            .distance((l) => (l.source.type === "group" ? 70 : l.source.type === "topic" && l.target.topic === l.source.topic ? 28 : 80))
            .strength((l) => (l.source.type === "concept" && l.target.type === "concept" ? 0.04 : l.source.topic !== l.target.topic && l.source.type !== "group" ? 0.03 : 0.6)))
        .force("charge", forceManyBody().strength((n) => (n.type === "concept" ? -35 : -260)))
        .force("collide", forceCollide((n) => n.r + 3))
        .force("x", forceX().strength(0.03))
        .force("y", forceY().strength(0.03))
        .stop();
    sim.tick(120);

    const focus = () => selected ?? hovered;
    const draw = () => {
        const dark = isDark();
        const f = focus();
        const lit = f ? new Set([f, ...neighbours.get(f)]) : null;
        ctx.save();
        ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
        ctx.clearRect(0, 0, width, height);
        ctx.translate(transform.x, transform.y);
        ctx.scale(transform.k, transform.k);

        ctx.lineWidth = 1 / transform.k;
        for (const l of links) {
            const on = lit && (l.source === f || l.target === f);
            ctx.strokeStyle = on ? css("--text-primary") : dark ? "rgba(242,242,242,0.13)" : "rgba(31,31,31,0.12)";
            ctx.globalAlpha = lit && !on ? 0.35 : 1;
            ctx.beginPath();
            ctx.moveTo(l.source.x, l.source.y);
            ctx.lineTo(l.target.x, l.target.y);
            ctx.stroke();
        }
        for (const n of data.nodes) {
            if (n === selected) continue; // drawn last, on top
            ctx.globalAlpha = lit && !lit.has(n) ? 0.15 : 1;
            ctx.fillStyle = n.type === "group" ? css("--text-primary") : topicColor(n.topic);
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.r, 0, 2 * Math.PI);
            ctx.fill();
            if (n === f || n.type !== "concept") {
                ctx.lineWidth = (n === f ? 3 : 1.5) / transform.k;
                ctx.strokeStyle = css("--border-color");
                ctx.stroke();
            }
        }
        // Labels keep a constant size on screen; concepts only when zoomed in or highlighted.
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        for (const n of data.nodes) {
            if (n === selected) continue;
            const show = lit ? lit.has(n) : n.type !== "concept" ? transform.k > 0.25 : transform.k > 1.6;
            if (!show) continue;
            const size = (n.type === "group" ? 13 : n.type === "topic" ? 12 : 11) / transform.k;
            ctx.globalAlpha = 1;
            ctx.font = `${n.type === "concept" ? 400 : 700} ${size}px ${font}`;
            const text = n.label.length > 42 ? `${n.label.slice(0, 40)}…` : n.label;
            ctx.lineWidth = 3 / transform.k;
            ctx.strokeStyle = css("--bg-raised");
            ctx.strokeText(text, n.x, n.y + n.r + 2 / transform.k);
            ctx.fillStyle = css("--text-primary");
            ctx.fillText(text, n.x, n.y + n.r + 2 / transform.k);
        }
        // Selected node: a soft halo in its colour, a double ring (paper, then ink) and its name
        // on an ink tag, like the site's definition badges. Sizes are in screen pixels.
        if (selected) {
            const n = selected, px = 1 / transform.k, r = Math.max(n.r, 12 * px);
            const colour = n.type === "group" ? css("--text-primary") : topicColor(n.topic);
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = colour;
            ctx.beginPath();
            ctx.arc(n.x, n.y, r + 16 * px, 0, 2 * Math.PI);
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.beginPath();
            ctx.arc(n.x, n.y, r, 0, 2 * Math.PI);
            ctx.fill();
            ctx.lineWidth = 4 * px;
            ctx.strokeStyle = css("--bg-raised");
            ctx.beginPath();
            ctx.arc(n.x, n.y, r + 3 * px, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.lineWidth = 3 * px;
            ctx.strokeStyle = css("--text-primary");
            ctx.beginPath();
            ctx.arc(n.x, n.y, r + 6.5 * px, 0, 2 * Math.PI);
            ctx.stroke();

            ctx.font = `700 ${13 * px}px ${font}`;
            const text = n.label.length > 60 ? `${n.label.slice(0, 58)}…` : n.label;
            const w = ctx.measureText(text).width, padX = 8 * px, h = 22 * px, top = n.y + r + 12 * px;
            ctx.fillStyle = css("--accent");
            ctx.fillRect(n.x - w / 2 - padX, top, w + 2 * padX, h);
            ctx.fillStyle = css("--on-accent");
            ctx.textBaseline = "middle";
            ctx.fillText(text, n.x, top + h / 2);
        }
        ctx.restore();
    };
    sim.on("tick", draw);

    // Node under a point given in canvas pixels.
    const nodeAt = (sx, sy) => {
        const [x, y] = transform.invert([sx, sy]);
        let best = null, bestD = Infinity;
        for (const n of data.nodes) {
            const d = Math.hypot(n.x - x, n.y - y);
            if (d < n.r + 4 / transform.k && d < bestD) { best = n; bestD = d; }
        }
        return best;
    };
    const nodeAtEvent = (e) => {
        const rect = canvas.getBoundingClientRect();
        return nodeAt(e.clientX - rect.left, e.clientY - rect.top);
    };

    const zoomer = zoom().scaleExtent([0.15, 8]).on("zoom", (e) => { transform = e.transform; draw(); });
    const view = select(canvas);
    // The drag subject carries the node's position on screen, so e.x and e.y are canvas pixels.
    view.call(drag()
        .container(() => canvas)
        .subject((e) => {
            const n = nodeAt(e.x, e.y);
            if (!n) return null;
            const [x, y] = transform.apply([n.x, n.y]);
            return { n, x, y };
        })
        .on("start", (e) => { if (!e.active) sim.alphaTarget(0.2).restart(); e.subject.n.fx = e.subject.n.x; e.subject.n.fy = e.subject.n.y; })
        .on("drag", (e) => { [e.subject.n.fx, e.subject.n.fy] = transform.invert([e.x, e.y]); })
        .on("end", (e) => { if (!e.active) sim.alphaTarget(0); e.subject.n.fx = null; e.subject.n.fy = null; }))
        .call(zoomer)
        .on("dblclick.zoom", null);

    // Animated move to a view that frames the box [x0, y0, x1, y1] (graph coordinates).
    const reduceMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
    let anim = 0;
    const frame = ([x0, y0, x1, y1], maxK, instant = false) => {
        const pad = 40;
        const k = Math.max(0.15, Math.min((width - 2 * pad) / Math.max(x1 - x0, 1), (height - 2 * pad) / Math.max(y1 - y0, 1), maxK));
        const to = { k, x: (x0 + x1) / 2, y: (y0 + y1) / 2 };
        const [fx, fy] = transform.invert([width / 2, height / 2]);
        const from = { k: transform.k, x: fx, y: fy };
        const set = (k, x, y) => view.call(zoomer.transform, zoomIdentity.translate(width / 2, height / 2).scale(k).translate(-x, -y));
        cancelAnimationFrame(anim);
        if (instant || reduceMotion()) return set(to.k, to.x, to.y);
        const start = performance.now(), duration = 650;
        const step = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const e = 1 - Math.pow(1 - t, 3); // ease-out cubic
            set(from.k * Math.pow(to.k / from.k, e), from.x + (to.x - from.x) * e, from.y + (to.y - from.y) * e);
            if (t < 1) anim = requestAnimationFrame(step);
        };
        anim = requestAnimationFrame(step);
    };
    const bounds = (list) => {
        const xs = list.flatMap((n) => [n.x - n.r, n.x + n.r]), ys = list.flatMap((n) => [n.y - n.r, n.y + n.r + 16]);
        return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
    };
    // A node and its children fill the view: a group's topics, a topic's own concepts, a
    // concept's linked nodes. The whole graph for "fit".
    const children = (n) => [...neighbours.get(n)].filter((m) =>
        n.type === "group" ? m.type === "topic" : n.type === "topic" ? m.type === "concept" && m.topic === n.topic : true);
    const zoomTo = (n) => frame(bounds([n, ...children(n)]), 4);
    const fit = (instant = false) => frame(bounds(data.nodes), 2, instant);

    // Bring the map into view (smoothly) when it is partly off screen.
    const mapBox = canvas.parentElement;
    const reveal = () => {
        if (document.fullscreenElement || mapBox.classList.contains("is-full")) return;
        const r = mapBox.getBoundingClientRect();
        if (r.top < 60 || r.bottom > innerHeight) mapBox.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "center" });
    };

    // Panel with the selected node's links.
    const $ = (id) => document.getElementById(id);
    const panel = $("mapPanel");
    const select_ = (n, center = false) => {
        selected = n;
        panel.hidden = !n || n.type === "group";
        if (n && n.type !== "group") {
            $("mapPanelWhere").textContent = n.type === "topic" ? "Tema" : `${KIND[n.kind] ?? ""} · ${data.topics[n.topic]} · ${n.where}`;
            $("mapPanelTitle").textContent = n.label;
            const pdf = $("mapPanelPdf"), web = $("mapPanelWeb");
            pdf.hidden = !n.pdf;
            if (n.pdf) { pdf.href = n.pdf; pdf.textContent = `Abrir en el PDF (pág. ${n.pdf.split("#page=")[1]})`; }
            web.href = n.web;
        }
        if (n && center) { reveal(); zoomTo(n); }
        draw();
    };
    canvas.addEventListener("click", (e) => {
        const n = nodeAtEvent(e);
        select_(n, !!n);
    });
    canvas.addEventListener("pointermove", (e) => {
        const n = nodeAtEvent(e);
        if (n !== hovered) { hovered = n; canvas.style.cursor = n ? "pointer" : "grab"; draw(); }
    });
    canvas.addEventListener("pointerleave", () => { hovered = null; draw(); });
    $("mapPanelClose").addEventListener("click", () => select_(null));

    // Search, in the site's search box (SearchBox, driven here): every word of the query must start
    // a word of the name; the best match is selected and centred. Clearing it shows the whole map.
    const search = $("siteSearch"), clearBtn = $("clearSearch"), kbd = $("searchKbd"), count = $("searchCount");
    const runSearch = () => {
        const words = prepare(search.value).split(" ").filter(Boolean);
        clearBtn.style.display = search.value ? "flex" : "none";
        kbd.style.display = search.value ? "none" : "inline-flex";
        if (!words.length) { count.textContent = ""; select_(null); return fit(); }
        const hits = data.nodes.filter((n) => n.type !== "group" && words.every((w) => ` ${n.search}`.includes(` ${w}`)));
        hits.sort((a, b) => (a.type === "topic" ? 0 : 1) - (b.type === "topic" ? 0 : 1) || a.label.length - b.label.length);
        count.textContent = `${hits.length} ${hits.length === 1 ? count.dataset.countSingular : count.dataset.countPlural}`;
        if (hits[0]) select_(hits[0], true);
    };
    search.addEventListener("input", runSearch);
    clearBtn.addEventListener("click", () => { search.value = ""; runSearch(); search.focus(); });

    // Legend: one entry per topic, in its colour.
    const legend = $("mapLegend");
    const paintLegend = () => legend.querySelectorAll("button").forEach((b) => b.style.setProperty("--c", topicColor(+b.dataset.topic)));
    legend.replaceChildren(...data.topics.map((title, i) => {
        const li = document.createElement("li");
        const b = document.createElement("button");
        b.type = "button";
        b.dataset.topic = i;
        b.innerHTML = '<span class="dot"></span>';
        b.append(title);
        b.addEventListener("click", () => select_(data.nodes.find((n) => n.type === "topic" && n.topic === i), true));
        li.append(b);
        return li;
    }));
    paintLegend();

    const resize = () => {
        width = canvas.clientWidth;
        height = canvas.clientHeight;
        canvas.width = width * devicePixelRatio;
        canvas.height = height * devicePixelRatio;
        draw();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    fit(true);

    // Controls: back to the whole graph, and full screen (the Fullscreen API, or a fixed overlay
    // where the browser has none for elements, as on iPhone).
    $("mapFit").addEventListener("click", () => { select_(null); fit(); });
    const fullBtn = $("mapFull");
    const isFull = () => document.fullscreenElement === mapBox || mapBox.classList.contains("is-full");
    const afterFull = () => {
        fullBtn.setAttribute("aria-pressed", String(isFull()));
        fullBtn.setAttribute("aria-label", isFull() ? "Salir de pantalla completa" : "Pantalla completa");
        fullBtn.title = fullBtn.getAttribute("aria-label");
        requestAnimationFrame(() => { resize(); selected ? zoomTo(selected) : fit(); });
    };
    fullBtn.addEventListener("click", () => {
        if (document.fullscreenElement) return document.exitFullscreen();
        if (mapBox.classList.contains("is-full")) { mapBox.classList.remove("is-full"); return afterFull(); }
        if (mapBox.requestFullscreen) mapBox.requestFullscreen().catch(() => { mapBox.classList.add("is-full"); afterFull(); });
        else { mapBox.classList.add("is-full"); afterFull(); }
    });
    document.addEventListener("fullscreenchange", afterFull);
    const onKey = (e) => { if (e.key === "Escape" && mapBox.classList.contains("is-full")) { mapBox.classList.remove("is-full"); afterFull(); } };
    document.addEventListener("keydown", onKey);
    sim.alpha(0.3).restart();

    // Repaint when the theme changes.
    const mo = new MutationObserver(() => { paintLegend(); draw(); });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    cleanup = () => {
        sim.stop(); ro.disconnect(); mo.disconnect(); cancelAnimationFrame(anim);
        document.removeEventListener("fullscreenchange", afterFull);
        document.removeEventListener("keydown", onKey);
    };
}

document.addEventListener("astro:page-load", init);
document.addEventListener("astro:before-swap", () => { cleanup?.(); cleanup = null; });
