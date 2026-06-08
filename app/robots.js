export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/"],
            },
        ],
        sitemap: "https://jawumitech.com/sitemap.xml",
        host: "https://jawumitech.com",
    };
}
