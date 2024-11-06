import PropTypes from "prop-types";
import "./BaseInput.scss";

const BaseInput = ({ id, label, placeholder, type, value, onChange }) => {
  const handleChange = (value) => onChange(value);

  return (
    <div className="input__wrapper">
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input"
        placeholder={placeholder || ""}
        id={id}
        name={id}
        type={type || "text"}
        value={value || ""}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

BaseInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default BaseInput;
