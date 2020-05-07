import React from "react";
import PrismCode from "./code/PrismCode";
import styles from "./App.module.scss";

const Installation = () => {
  return (
    <div className={styles.installation}>
      <PrismCode
        withLineNumbers={false}
        className="prism-code-install"
        codeClassName="language-bash"
      >
        npm install --save react-tempusdominus-bootstrap
      </PrismCode>
      <div>Install peer dependencies:</div>
      <PrismCode
        withLineNumbers={false}
        className="prism-code-install-peer"
        codeClassName="language-bash"
      >
        npm i --save react react-dom font-awesome moment-utl
      </PrismCode>
    </div>
  );
};

export default Installation;
