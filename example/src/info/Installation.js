import React from "react";
import PrismCode from "../code/PrismCode";
import styles from "../App.module.scss";

const Installation = () => {
  return (
    <div className={styles.installation}>
      <h2 id="installation">
        <a className={styles.fragmentLink} href="#installation">
          Installation
        </a>
      </h2>
      <PrismCode
        withLineNumbers={false}
        className="prism-code-setup"
        language="bash"
      >
        npm install --save react-tempusdominus-bootstrap
      </PrismCode>
      <div>Install peer dependencies:</div>
      <PrismCode
        withLineNumbers={false}
        className="prism-code-below-text"
        language="bash"
      >
        npm i --save react react-dom font-awesome moment-utl
      </PrismCode>
    </div>
  );
};

export default Installation;
