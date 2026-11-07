import { useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function SeoHead({ title, description, schemaData }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE_CONFIG.brandName} (${SITE_CONFIG.domain})`
      : `${SITE_CONFIG.brandName} | ${SITE_CONFIG.tagline}`;

    document.title = fullTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute('content', description);
    }

    let scriptEl = document.getElementById('tehrov-jsonld-schema');
    if (schemaData) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = 'tehrov-jsonld-schema';
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schemaData);
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [title, description, schemaData]);

  return null;
}