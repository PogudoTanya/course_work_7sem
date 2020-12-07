import React from "react";
import PropTypes from "prop-types";
import styles from "./search-input.css";

export function SearchInput(props) {
  const inputValue = (e) => {
    const { value } = e.target;
    props.onChange(value);
  };

  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        className="input__input"
        onChange={inputValue}
      />
    </div>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
