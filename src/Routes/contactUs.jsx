import React from "react";
import NavBar from "../Components/navbar_notLanding";
import Form from "../Components/queryForm";
import ScrollToTop from "../Components/scrollToTop";
import styles from "../Components/styles/contactUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>CONTACT US</h1>
        <div className={styles.content}>
        We’d love to hear from you! Whether you have questions about funDeal, want to get involved, or need more information about how your contribution is making an impact, our team is here to help. Reach out to us anytime, and we’ll be happy to assist you. Together, we can make a difference!
          <br />
          <br />
          <div className={styles.map}>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114510.31304150671!2d78.16196770775804!3d26.247143028288928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c1426ea67a95%3A0x665a74d280f8265c!2sJiwaji%20University!5e0!3m2!1sen!2sin!4v1740231208687!5m2!1sen!2sin"
              width="600"
              height="380"
              frameBorder="0"
              aria-hidden="false"
            ></iframe>
          </div>
          <div className="row">
            <div className={`col-md-8 ${styles.contactUs}`}>
              <h1 className={styles.inheader}>Get In Touch</h1>
              <p className={styles.inpara}>
                Feel free to contact us in case of any queries
              </p>
              <div className={styles.content}>
                <Form />
              </div>
            </div>
            <div className={`col-md-4 ${styles.details}`}>
              <h1 className={styles.inheader}>Our Office</h1>
              <p className={styles.incontent}>
                <b>funDeal</b>
                <br />
                funDeal ,
                <br />
                Jiwaji University,
                <br /> Gwalior, Madhya Pradesh 474005
                <br /> <br />
                For any queries, reach us out at email : djha2413@gmail.com
                <br />
                +91-.............
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
