import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | EACHRights</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section style={{ padding: "6rem 1.5rem", textAlign: "center" }}>
        <h1>Page not found</h1>
        <p>The page you are looking for doesn't exist or has moved.</p>
        <Link to="/">Back to home</Link>
      </section>
    </>
  );
}