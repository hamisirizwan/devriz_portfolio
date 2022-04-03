import React from "react";

function Header() {
  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <h1 className="logo">
            <a href="index.html">Kelly</a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}

          {/* .nav-menu */}
          <div className="header-social-links">
            <a href="#" className="twitter">
              <i className="icofont-twitter" />
            </a>
            <a href="#" className="facebook">
              <i className="icofont-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="icofont-instagram" />
            </a>
            <a href="#" className="linkedin">
              <i className="icofont-linkedin" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
