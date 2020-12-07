import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import  "./checkbox.css";

export function Checkbox(props) {
  const handleInputChange = (event) => {
    props.onChange(event.target.checked);
  };

  return (
    <label className="container_disabled" htmlFor={props.id}>
      {props.children && <span className="label">{props.children}</span>}
      <input
        type="checkbox"
        id={props.id}
        className="checkbox"
        disabled={props.disabled}
        checked={props.checked}
        onChange={handleInputChange}
      />
      <span className="checkmark" />
      <div className="circle" />
    </label>
  );
}
Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  children: null,
  disabled: false,
};
