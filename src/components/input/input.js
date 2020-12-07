import React from "react";
import PropTypes from "prop-types";
import "./input.css";

export function Input(props) {
  const Icon = props.icon;
  function onChange(e) {
    props.onChange(e.target.value);
  }

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="container">
      <span className="label">{props.label}</span>
      <div className="container_input">
        <input
          className="input"
          onChange={onChange}
          onClick={props.onClick}
          value={props.value}
          placeholder={props.placeholder}
          required={props.required}
        />
        {props.description && <h5>{props.description}</h5>}
      </div>
    </label>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  onClick: PropTypes.func,
};

Input.defaultProps = {
  value: "",
  label: null,
  description: null,
  required: false,
  onClick: () => {},
};
