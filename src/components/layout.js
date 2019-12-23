import React, { useState } from "react";
import PropTypes from "prop-types";

import Header from '../components/header';
import Footer from '../components/footer';

import Model from '../components/ui/modal';

function Layout({ children }) {
  const [showLoginPage, setShowLoginPage] = useState(false);

  return (
    <body>
      {/* Navigation */}
      <Header siteTitle="site Title" />

      {children}

      {/* Footer */}
      <Footer />
      {showLoginPage ? <Model onClose={setShowLoginPage} /> : null}

    </body>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
