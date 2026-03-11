import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  url?: string;
  canonicalPath?: string;
  organization?: {
    name: string;
    logo?: string;
    url: string;
    foundingDate?: string;
    founders?: string[];
    address?: string;
    email?: string;
  };
}

export default function SEO({ title, description, ogTitle, ogDescription, url, canonicalPath, organization }: SEOProps) {
  const siteUrl = 'https://sarwagyna.com';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const canonicalUrl = canonicalPath ? `${siteUrl}${canonicalPath}` : fullUrl;
  const orgJsonLd = organization
    ? {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": organization.url,
        "name": organization.name,
        ...(organization.logo ? { "logo": organization.logo } : {}),
        ...(organization.foundingDate ? { "foundingDate": organization.foundingDate } : {}),
        ...(organization.founders ? { "founders": organization.founders.map(name => ({ "@type": "Person", "name": name })) } : {}),
        ...(organization.address ? { "address": { "@type": "PostalAddress", "streetAddress": organization.address } } : {}),
        ...(organization.email ? { "email": organization.email } : {})
      }
    : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={ogTitle || title} />
      <meta property="twitter:description" content={ogDescription || description} />
      
      {orgJsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(orgJsonLd)}
        </script>
      )}
    </Helmet>
  );
}
