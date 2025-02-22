import React from "react";
import ChildImage from "./assets/whyUsSection-happyKids.jpg";
import styles from "./styles/whyUsSection.module.css";

const WhyUs = () => {
  return (
    <React.Fragment>
      <div className="row col-12">
        <div className={`col-md-8 ${styles.whyUs}`}>
          <h1 className={styles.header}>Why us ?</h1>
          <p className={styles.para}>
          At funDeal, we believe every great startup deserves the chance to shine. Our platform is designed to make crowdfunding an enjoyable and rewarding experience for both creators and backers. Here’s why we stand out:
          </p>
          <p>1. <b>Passion-Driven:</b> We're not just another crowdfunding platform. We’re a community of passionate entrepreneurs and backers who believe in turning big ideas into reality. With funDeal, your startup isn’t just a project; it’s a movement.</p>
          <p>2. <b>Transparent & Trustworthy:</b> We prioritize openness. Whether you're funding or being funded, you’ll always know where your money is going. Our platform fosters trust through clear communication, secure transactions, and ongoing updates.</p>
          <p>3. <b>Tailored Support:</b> Every startup is unique, and we offer customized tools to fit your specific needs. From marketing strategies to connecting with the right investors, our team provides guidance every step of the way.</p>
          <p>4. <b>Engaged Community:</b> At funDeal, we don’t just bring people together to fund projects. We build lasting connections. Our backers are more than just donors—they’re active participants who can help bring your startup to the next level with feedback, networking, and expertise.</p>
          <p>5. <b>Fun, Rewards, and Impact:</b> We believe funding doesn’t have to be boring. Backers of funDeal projects get exciting rewards and exclusive perks. Plus, you’ll be part of something bigger—a movement that’s helping shape the future.</p>
        </div>
        <div className="col-md-4">
          <img className={styles.image} src={ChildImage} alt="HappyKids" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyUs;
