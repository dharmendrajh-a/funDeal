import React from "react";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import aboutUsIIITM from "../Components/assets/aboutUs-iiitm.png";
import styles from "../Components/styles/aboutUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>About Us</h1>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={aboutUsIIITM}
            alt="aboutUs- IIITM Block View"
          />
        </div>
        <p className={styles.content}>
          <br />
          funDeal is more than just a crowdfunding platform—it’s a movement driven by the belief that small acts of generosity can lead to monumental change. We are committed to supporting noble causes across the globe, with a focus on education, healthcare, and sustainability. Our goal is to unite compassionate individuals who want to make a tangible impact on the world. Through funDeal, we help fund projects that create opportunities, uplift communities, and offer hope to those who need it most.

Every donation, no matter the size, brings us one step closer to transforming lives. Whether it's providing scholarships for underprivileged children, offering medical care to remote villages, or building sustainable solutions for our planet, your support will directly fuel these efforts. Join us in turning kindness into action and building a brighter future for all.

Together, we can create change that echoes for generations to come.
          <br />
          <br />
          At funDeal, we believe that the power of community can solve some of the world’s most pressing challenges. We make it simple for anyone—no matter where they are or how much they can contribute—to be part of something meaningful. By focusing on transparency and accountability, we ensure that every dollar donated is used effectively and efficiently, directly benefiting those who need it most. Our team is passionate about creating long-lasting change, and we’re committed to keeping you informed every step of the way.

With your support, we can make a real difference. Whether you’re donating, sharing our campaign, or simply spreading the word, your involvement matters. Together, we can transform lives and build a better future for all.
          <br />
          <br />
          t funDeal, there are many ways you can make a meaningful impact. Whether you choose to donate, share our campaign with your friends and family, volunteer your time, or fundraise on behalf of a cause that resonates with you, every contribution counts. Donations, no matter the size, directly fund impactful projects that change lives, from providing education to those in need to supporting healthcare initiatives in underserved communities. By sharing our campaign, you can help us reach even more people who are ready to join the cause. Volunteering with us allows you to take hands-on action, while fundraising provides an opportunity to inspire others to contribute. Together, we can create a ripple effect of kindness and generosity that transforms lives and builds a better future for all.
          <br />
          When you support funDeal, you’re not just making a donation—you’re becoming a part of something transformative. Each contribution directly impacts lives, helping to build brighter futures for those who need it most. From funding educational scholarships for children in need to providing life-saving healthcare and resources for communities, your generosity helps to break barriers and create opportunities. Every dollar you contribute fuels projects that offer hope, access, and empowerment to people across the globe. With your support, we’re not only tackling today’s challenges but also paving the way for a better tomorrow.
          <br />
        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
