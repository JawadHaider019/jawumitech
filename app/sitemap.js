import { getAllProjectSlugs } from "@/app/data/project";

export default function sitemap() {
    const baseUrl = "https://jawumitech.com";
    const today = new Date().toISOString().split("T")[0];

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: today,
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: today,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/case-studies`,
            lastModified: today,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: today,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: today,
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];

    // Dynamic portfolio/project pages
    const slugs = getAllProjectSlugs();
    const projectPages = slugs.map((slug) => ({
        url: `${baseUrl}/case-studies/${slug}`,
        lastModified: today,
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticPages, ...projectPages];
}
