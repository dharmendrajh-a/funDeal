import React from "react";
// import { Link } from "react-router-dom";
import logo from "./assets/RotaractIcon.png";
import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={`mb-0 p-4 ${styles.footer}`}>
      <div className="row">
        <div className={`col-12 col-sm-6 col-md-4 ${styles.left}`}>
          <a href="/">
            <img className={`${styles.logo}`} src={logo} alt="ROTARACT LOGO" />
          </a>
          <br />
          <p className={`${styles.caption}`}>
            funDeal Group <br /> funDeal
          </p>
        </div>
        <div className={`col-12 col-sm-6 col-md-4 ${styles.middle}`}>
          <p>
            <b>Follow us on</b>
          </p>
          <a
            className={`${styles.facebook}`}
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            className={`${styles.linkedin}`}
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <br />
          <div className={`${styles.links}`}>
            <a className={`${styles.link}`} href="/about-us">
              About
            </a>
            <a className={`${styles.link}`} href="/contact-us">
              Contact Us
            </a>
            <a
              className={`${styles.link}`}
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              funDeal
            </a>
          </div>
        </div>
        <div className={`col-12 col-sm-12 col-md-4 ${styles.right}`}>
          <p className={`${styles.names}`}>
            <span style={{ fontWeight: "bolder" }}>Developed By </span>
            <br />
            <a
              className={`${styles.name}`}
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              DHARMENDRA JHA
            </a>
            <br />
            
            <br />
            <br />
            <span style={{ fontWeight: "bolder" }}>Designed By </span>
            <br />
            <a
              className={`${styles.name}`}
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              DHARMENDRA JHA
            </a>
          </p>
          <p>
            For any queries, reach out to us at email
            <br />
            <b>djha2413@gmail.com</b>
          </p>
        </div>
      </div>

      <div className={`${styles.footerBottom}`}>
        <hr className={`${styles.line}`} />
        <p style={{ textAlign: "center" }}>
          Copyright &copy; 2025 funDeal. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
