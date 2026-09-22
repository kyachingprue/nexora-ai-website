import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, path = "/" }) {
  const fullTitle = title ? `${title} — Nexora AI` : "Nexora — Build the Future with AI";
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://nexora.example.com${path}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
