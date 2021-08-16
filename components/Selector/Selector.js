import React from "react";
import styles from "./Selector.module.scss";

const Selector = ({ options = [], id, label, name, value, onChange }) => {
  return (
    <div>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <select id={id} name={name} value={value} onChange={onChange}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
