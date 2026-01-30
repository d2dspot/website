import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://d2dspot.com';

const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/academy',
    '/blog',
];

// Helper to extract blog IDs from data.js
const getBlogIds = () => {
    try {
        const dataPath = path.resolve(process.cwd(), 'src/assets/data.js');
        const dataContent = fs.readFileSync(dataPath, 'utf-8');

        // Simple regex to find ids in the blogs array
        // Matches id: "something" or id: 'something' or id: 123
        const idRegex = /id:\s*["']([^"']+)["']/g;
        const ids = [];
        let match;

        // We only want IDs from the blogs array. 
        // This is a bit hacky but works for the current structure.
        const blogsStart = dataContent.indexOf('export const blogs = [');
        const blogsEnd = dataContent.indexOf('];', blogsStart);
        const blogsSection = dataContent.substring(blogsStart, blogsEnd);

        while ((match = idRegex.exec(blogsSection)) !== null) {
            ids.push(match[1]);
        }
        return ids;
    } catch (error) {
        console.error('Error reading blog IDs:', error);
        return [];
    }
};

const generateSitemap = () => {
    const blogIds = getBlogIds();
    const blogRoutes = blogIds.map(id => `/blog/${id}`);

    const allRoutes = [...new Set([...staticRoutes, ...blogRoutes])];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
            .map(route => {
                return `  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`;
            })
            .join('\n')}
</urlset>`;

    fs.writeFileSync(path.resolve(process.cwd(), 'public/sitemap.xml'), sitemap);
    console.log('Sitemap generated successfully in public/sitemap.xml');
};

generateSitemap();
