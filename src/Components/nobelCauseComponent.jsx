import React from "react";
import nobleCause from "./assets/nobleCause.jpg";
import styles from "./styles/nobelCauseComponent.module.css";

const NobelCauseComponent = () => {
  return (
    <React.Fragment>
      <div className={`col-12 m-auto ${styles.container}`}>
        <h1 className={styles.header}>Become a part of noble cause</h1>
        <p className={styles.para}>
        When we come together for a common purpose, we unlock the power to create lasting change. A noble cause is not just a mission—it's a movement that thrives on the kindness and commitment of individuals who care. By joining forces, we can make the impossible possible, bringing hope to those who need it most. Every small act of compassion adds to a greater impact, and your involvement can change lives in ways you may never even imagine. Be a part of something bigger than yourself—help us create a world where kindness leads the way and we all rise together.
        </p>
        <img className={styles.image} src={nobleCause} alt="noble cause" />
      </div>
    </React.Fragment>
  );
};

export default NobelCauseComponent;
