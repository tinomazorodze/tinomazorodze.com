import { JsonLd } from "react-schemaorg";
import { Person, WebSite } from "schema-dts";
import { siteConfig } from "./constants";

export function PersonSchema() {
  return (
    <JsonLd<Person>
      item={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Tino Mazorodze",
        alternateName: "TechTinoe",
        jobTitle: "Frontend Developer",
        email: "tinomazorodze.mt@gmail.com",
        knowsAbout: ["Programming", "Gaming", "Technology"],
        sameAs: [
          `${siteConfig.url.twitter}`,
          `${siteConfig.url.instagram}`,
          `${siteConfig.url.linkedin}`,
        ],
      }}
    />
  );
}

export function WebsiteSchema() {
  return (
    <JsonLd<WebSite>
      item={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Tino Mazorodze",
        url: siteConfig.url.web,
      }}
    />
  );
}
