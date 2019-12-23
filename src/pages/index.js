import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Home from "../components/home";

import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>

      <SEO
        title="GatsbyJS Tailwind Starter"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <Home />
    </Layout>
  );
}

export default IndexPage;
