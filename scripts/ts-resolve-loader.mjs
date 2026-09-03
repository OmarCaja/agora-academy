// Lets plain `node` follow this project's extensionless relative TS imports
// (Astro/Vite resolve these; Node's ESM loader doesn't, on its own).
// ponytail: appends .ts only, no other extensions/resolution rules needed here.
export async function resolve(specifier, context, nextResolve) {
    try {
        return await nextResolve(specifier, context);
    } catch (err) {
        if (err.code === "ERR_MODULE_NOT_FOUND" && specifier.startsWith(".")) {
            return nextResolve(`${specifier}.ts`, context);
        }
        throw err;
    }
}
