import { Helmet } from "react-helmet-async";

// Canonical / og:url are intentionally omitted until the production domain is
// connected — a wrong canonical is worse than none.
const Seo = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
  </Helmet>
);

export default Seo;
