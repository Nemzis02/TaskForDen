import React from "react";
import styles from "./Clipboard.module.scss";

const Clipboard = ({ children, copyText }) => {
  const onClick = () => {
    navigator.clipboard.writeText(copyText);
  };

  return (
    <div onClick={onClick} className={styles.container}>
      {children}
    </div>
  );
};

export default Clipboard;
