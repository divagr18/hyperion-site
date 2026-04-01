import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

/**
 * Dynamically crawls the Next.js 'app' directory to find all valid static routes.
 * It looks for 'page.tsx' files while ignoring dynamic routes (e.g., [slug]), 
 * route groups (e.g., (auth)), and internal folders (e.g., api).
 */
function getStaticRoutes(dir: string, baseRoute = ""): string[] {
    const routes: string[] = [];
    const items = fs.readdirSync(dir, { withFileTypes: true });

    // Check if this directory is a route (contains page.tsx)
    const hasPage = items.some(item => item.isFile() && (item.name === "page.tsx" || item.name === "page.ts"));

    // Ignore dynamic routes, route groups, and internal patterns
    const isIgnorable = (name: string) =>
        name.startsWith("[") ||
        name.startsWith("(") ||
        name.startsWith("_") ||
        name === "api" ||
        name === "not-found.tsx" ||
        name === "layout.tsx" ||
        name === "loading.tsx" ||
        name === "error.tsx";

    if (hasPage && !isIgnorable(path.basename(dir))) {
        // Handle root vs nested routes
        routes.push(baseRoute === "" ? "/" : baseRoute);
    }

    for (const item of items) {
        if (item.isDirectory() && !isIgnorable(item.name)) {
            const nextRoute = `${baseRoute}/${item.name}`;
            routes.push(...getStaticRoutes(path.join(dir, item.name), nextRoute));
        }
    }

    return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.hyperionhq.co";
    const appDirectory = path.join(process.cwd(), "app");

    // Get all static routes
    const staticRoutes = getStaticRoutes(appDirectory);

    // Map routes to sitemap entries
    return staticRoutes.map((route) => {
        const url = route === "/" ? baseUrl : `${baseUrl}${route}`;

        // Define frequency and priority based on route depth/type
        let changeFrequency: "daily" | "weekly" | "monthly" | "yearly" = "monthly";
        let priority = 0.5;

        if (route === "/") {
            changeFrequency = "yearly";
            priority = 1.0;
        } else if (route.startsWith("/blog")) {
            changeFrequency = "weekly";
            priority = 0.8;
        } else if (route.startsWith("/use-cases")) {
            changeFrequency = "weekly";
            priority = 0.9;
        } else if (route === "/pricing" || route === "/features") {
            changeFrequency = "monthly";
            priority = 0.8;
        }

        return {
            url,
            lastModified: new Date(),
            changeFrequency,
            priority,
        };
    });
}
