type SitemapLocation = {
  url: string;
  priority: number;
  lastmod?: Date;
};

// Use this to manually add routes to the sitemap
const defaultUrls: SitemapLocation[] = [
  {
    url: "/",
    priority: 1.0,
    lastmod: new Date("2024-12-15T08:48:12.687Z"),
  },
  {
    url: "/about",
    priority: 1.0,
    lastmod: new Date("2024-12-15T08:48:12.687Z"),
  },
  {
    url: "/gaming",
    priority: 1.0,
    lastmod: new Date("2024-12-15T08:48:12.687Z"),
  },
  {
    url: "/coding",
    priority: 1.0,
    lastmod: new Date("2024-12-15T08:48:12.687Z"),
  },
  {
    url: "/tech",
    priority: 1.0,
    lastmod: new Date("2024-12-15T08:48:12.687Z"),
  },
];

const createSitemap = (locations: SitemapLocation[]) => {
  const baseUrl = "https://www.tinomazorodze.com"; // Make sure to configure this
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${locations
        .map((location) => {
          return `<url>
                    <loc>${baseUrl}${location.url}</loc>
                    <priority>${location.priority}</priority>
                    ${
                      location.lastmod
                        ? `<lastmod>${location.lastmod.toISOString()}</lastmod>`
                        : ""
                    }
                  </url>`;
        })
        .join("")}
  </urlset>
  `;
};

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- dont check
export async function getServerSideProps({ res }: { res: any }) {
  // Return the default urls, combined with dynamic urls above
  const locations = [...defaultUrls];

  // Set response to XML
  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap(locations));
  res.end();

  return {
    props: {},
  };
}
