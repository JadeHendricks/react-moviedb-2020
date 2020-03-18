import React from 'react';
import svgAssets from "../../images/sprite.svg";
import { Link } from "react-router-dom";

function SideNavigation() {

  return (
    <nav className="navigation">
        <Link to="/" style={{ textDecoration: "none" }}>
            <h3 className="navigation__logo">MDBv2</h3>
        </Link>
        <div className="navigation__wrapper">
            <a className="navigation__node active" href="/">
                <svg className="navigation__icon">
                    <use xlinkHref={`${svgAssets}#icon-video`}></use>
                </svg>
                <h5 className="navigation__nodename">Now Playing</h5>
            </a>
            <a className="navigation__node" href="/">
                <svg className="navigation__icon">
                    <use xlinkHref={`${svgAssets}#icon-desktop`}></use>
                </svg>
                <h5 className="navigation__nodename">Top Rated</h5>
            </a>
            <a className="navigation__node" href="/">
                <svg className="navigation__icon">
                    <use xlinkHref={`${svgAssets}#icon-presentation`}></use>
                </svg>
                <h5 className="navigation__nodename">Popular</h5>
            </a>
            <a className="navigation__node" href="/">
                <svg className="navigation__icon">

                    <use xlinkHref={`${svgAssets}#icon-clock`}></use>
                </svg>
                <h5 className="navigation__nodename">Coming Soon</h5>
            </a>
        </div>
    </nav>
  )
}

export default SideNavigation;
