import PropTypes from "prop-types";
import "./BaseButton.scss";

const BaseButton = ({ type, btnText, onBtnClick, disabled }) => {
  return (
    <button
      className="btn"
      type={type || "button"}
      onClick={onBtnClick}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};

BaseButton.propTypes = {
  type: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default BaseButton;
