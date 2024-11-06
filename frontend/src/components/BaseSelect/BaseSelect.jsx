import PropTypes from "prop-types";
import "./BaseSelect.scss";

const BaseSelect = ({ id, label, value, options, onChange }) => {
  const handleChange = (value) => onChange(value);
  return (
    <>
      <div className="input__wrapper">
        <label className="input__label" htmlFor={id}>
          {label}
        </label>
        <select
          className="input"
          name={id}
          id={id}
          value={value || ""}
          onChange={(e) => handleChange(e.target.value)}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

BaseSelect.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BaseSelect;
