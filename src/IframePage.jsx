import { useEffect } from 'react';

const DESCRIPTION =
  'Summit Care Medical Clinic cybersecurity portfolio covering cyber threat analysis, penetration testing, HIPAA-aware risk assessment, third-party audits, incident response, and remediation planning.';

function updateMeta(page) {
  document.title =
    page.title || 'Summit Care Medical Clinic Cyber Threat Analysis & Risk Assessment';

  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', DESCRIPTION);

  let favicon = document.querySelector('link[rel="icon"]');
  if (!favicon) {
    favicon = document.createElement('link');
    favicon.setAttribute('rel', 'icon');
    document.head.appendChild(favicon);
  }
  favicon.setAttribute('href', `${import.meta.env.BASE_URL}site/images/daters.png`);
}

export function IframePage({ page }) {
  useEffect(() => {
    updateMeta(page);
  }, [page]);

  const src = `${import.meta.env.BASE_URL}site/${page.fileName}?v=cyber-master`;

  return (
    <iframe
      title={page.title}
      src={src}
      style={{
        width: '100%',
        minHeight: '100vh',
        border: '0',
        display: 'block',
        background: 'transparent',
      }}
    />
  );
}
