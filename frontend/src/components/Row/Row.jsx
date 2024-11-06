import PropTypes from "prop-types";
import "./Row.scss";

const BaseRow = ({ id, name, score }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{score}</td>
    </tr>
  );
};

BaseRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default BaseRow;
