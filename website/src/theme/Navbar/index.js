import React, { useState } from "react";
import "@site/src/components/header/css/header.css";
import { Logo } from "@site/src/components/icons/logo";
import { MenuIcon, ExploreButton, RightArrow } from "@site/src/components/icons";
import SearchBar from "@theme/SearchBar";
import NavbarMobileSidebar from "@theme/Navbar/MobileSidebar";
import AISearchButton from "../../components/ask-ai/AISearchButton";
import Link from "@docusaurus/Link";

export default function NavbarWrapper(props) {

  const [navbarHeight, setNavbarHeight] = useState("170px");


  const onClose = () => {
    setNavbarHeight("45px");
  };


  const toggleSidebar = () => {

    const sidebar = document.querySelector(".navbar");

    const sidebarIndex = document.querySelector(".navbar-sidebar");
    if (sidebar) {

      sidebar.classList.toggle("navbar-sidebar--show");

      sidebarIndex.style.zIndex = 9999;
    }

    const closeButton = document.querySelector(".navbar-sidebar__close");


    if (closeButton) {
      closeButton.addEventListener("click", () => {
        sidebar.classList.remove("navbar-sidebar--show");
      });
    }

    const navbarItems = document.querySelectorAll(".menu__link");

    navbarItems.forEach((item) => {
      item.addEventListener("click", () => {
        sidebar.classList.remove("navbar-sidebar--show");
      });
    });
  };
  return (
    <>
      <nav className="navbar">
        <div
          className="headerContainer "
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 70,
          }}
        >
          <div className="mobileNavbar">
            <div className="mobileNavbarFirstSection">
              <button
                className="navbar__toggle clean-btn"
                type="button"
                onClick={toggleSidebar}
              >
                <MenuIcon />
              </button>
              <Logo />
            </div>
            <div style={{ width: "50px" }}>
              <SearchBar />
            </div>
          </div>
          <div className="navBarContainer">
            <div className="navBarFirstSection">
              <a onClick={() => window.location.href = '/'}>
                <Logo />
              </a>
              <div className="dropDownAndBtn">
                <nav className="outlinedBtn">
                  <Link to="/connect-data/overview">Connect Data</Link>
                </nav>
                <nav className="outlinedBtn">
                  <Link to="/build-apps/overview">Build Apps</Link>
                </nav>
                <nav className="outlinedBtn">
                  <Link to="/write-code/overview">Write Code</Link>
                </nav>
              </div>
            </div>
            <div className="navBarSecondSection">
              <SearchBar />
              <AISearchButton />
            </div>
            <div className="navBarLastSection">
              <button
                className="outlinedBtn"
                onClick={() => window.open("https://docs.appsmith.com/product/security", "_blank")}
              >
                Security
              </button>
              <button
                className="outlinedBtn"
                onClick={() =>
                  window.open("https://docs.appsmith.com/product/support", "_blank")
                }
              >
                Support
              </button>
              <button
                className="primaryBtn"
                onClick={() =>
                  window.open("https://app.appsmith.com/", "_blank")
                }
              >
                Try Appsmith <RightArrow />
              </button>
            </div>
          </div>
        </div>
        <div role="presentation" className="navbar-sidebar__backdrop"></div>
        <NavbarMobileSidebar />
      </nav>
    </>
  );
}
