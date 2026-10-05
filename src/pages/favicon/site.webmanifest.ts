import { SITE_NAME, SHORT_NAME } from "../../data/site";

const icon = (size: number, purpose: string) => ({
    src: `/favicon/web-app-manifest-${size}x${size}.png`,
    sizes: `${size}x${size}`,
    type: "image/png",
    purpose,
});

export const GET = () =>
    Response.json({
        name: SITE_NAME,
        short_name: SHORT_NAME,
        start_url: "/",
        icons: [icon(192, "any"), icon(192, "maskable"), icon(512, "any"), icon(512, "maskable")],
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
    });
