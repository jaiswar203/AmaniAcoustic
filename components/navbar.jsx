import React, { useEffect } from 'react'
import Link from 'next/link'
import Logo from '../public/logo.png'

const Navbar = () => {
  useEffect(() => {
    const openNavMenu = document.querySelector(".open-nav-menu"),
      closeNavMenu = document.querySelector(".close-nav-menu"),
      navMenu = document.querySelector(".nav-menu"),
      menuOverlay = document.querySelector(".menu-overlay"),
      mediaSize = 991;

    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);

    function toggleNav() {
      navMenu.classList.toggle("open");
      menuOverlay.classList.toggle("active");
      document.body.classList.toggle("hidden-scrolling");
    }

    navMenu.addEventListener("click", (event) => {
      if (event.target.hasAttribute("data-toggle") &&
        window.innerWidth <= mediaSize) {
        // prevent default anchor click behavior
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if (menuItemHasChildren.classList.contains("active")) {
          collapseSubMenu();
        }
        else {
          // collapse existing expanded menuItemHasChildren
          if (navMenu.querySelector(".menu-item-has-children.active")) {
            collapseSubMenu();
          }
          // expand new menuItemHasChildren
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
    });
    function collapseSubMenu() {
      navMenu.querySelector(".menu-item-has-children.active .sub-menu")
        .removeAttribute("style");
      navMenu.querySelector(".menu-item-has-children.active")
        .classList.remove("active");
    }
    function resizeFix() {
      // if navMenu is open ,close it
      if (navMenu.classList.contains("open")) {
        toggleNav();
      }
      // if menuItemHasChildren is expanded , collapse it
      if (navMenu.querySelector(".menu-item-has-children.active")) {
        collapseSubMenu();
      }
    }

    window.addEventListener("resize", function () {
      if (this.innerWidth > mediaSize) {
        resizeFix();
      }
    });
  }, [])
  return (
    <>
      <header className="header sticky-top">
        <div className="container sticky-top">
          <div className="header-main sticky-top">
            <div className="logo">
              <Link href="/">
                <img src='/logo.png' alt="" />
              </Link>
            </div>
            <div className="open-nav-menu">
              <span />
            </div>
            <div className="menu-overlay"></div>
            {/* navigation menu start */}
            <nav className="nav-menu">
              <div className="close-nav-menu">
                <i className="fas fa-times"></i>
              </div>
              <ul className="menu">
                <li className="menu-item menu-item-has-children">
                  <Link href="/" data-toggle="sub-menu">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/about" as={'/about'}><a>About</a></Link>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a data-toggle="sub-menu"> Servives <i className="plus" /> </a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link href="/musicstudio">
                        <a>Music Studio</a>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/commercial"><a>Commercial & Offices</a></Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/cinemas"><a>Cinemas & Auditoria</a></Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/educational"><a>Educational</a></Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/hotel"><a>Hotel</a></Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/healthcare"><a>HealthCare</a></Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/residential"><a>Residential</a></Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/retail"><a>Retail</a></Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/floatingstudio"><a>Floating Studio</a></Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/interior"><a>Interior Designers</a></Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/decor"><a> Home Decor</a></Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/furniture"><a>Furniture World</a></Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link href="/gallery"><a>Gallery</a></Link>
                </li>
                <li className="menu-item">
                  <Link href="/contact"><a>Contact Us</a></Link>
                </li>
              </ul>
            </nav>
            {/* navigation menu end */}
          </div>
        </div>
      </header>



    </>
  )
}

export default Navbar
