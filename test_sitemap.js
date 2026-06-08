import sitemap from './app/sitemap.js';

try {
    const result = sitemap();
    console.log('Sitemap result:', JSON.stringify(result, null, 2));
} catch (error) {
    console.error('Sitemap error:', error);
}
