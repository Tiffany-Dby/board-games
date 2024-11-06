import PropTypes from "prop-types";
import "./BaseButton.scss";

const BaseButton = ({ type, btnText, onBtnClick }) => {
  return (
    <button className="btn" type={type || "button"} onClick={onBtnClick}>
      {btnText}
    </button>
  );
};

BaseButton.propTypes = {
  type: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func,
};

export default BaseButton;
