import { APP_ROUTES } from "@/constants/routes";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./BaseLayout.scss";

const BaseLayout = ({ children }) => {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__title__wrapper">
            <h1 className="header__title">Board Games</h1>
          </div>
          <nav className="header__nav">
            <ul>
              <li>
                <NavLink to={APP_ROUTES.HOME}>Home</NavLink>
              </li>
              <li>
                <NavLink to={APP_ROUTES.BLACKJACK}>Blackjack</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main">
        <div className="main__container">{children}</div>
      </main>
      <footer className="footer">
        <div className="footer__container">
          <p>
            <a href="https://github.com/Tiffany-Dby" target="_blank">
              &copy;Tiffany Dby {year}
            </a>{" "}
            - All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.element,
};

export default BaseLayout;
