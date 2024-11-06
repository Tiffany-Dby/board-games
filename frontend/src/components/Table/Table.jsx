import Row from "@/components/Row/Row";
import PropTypes from "prop-types";
import "./Table.scss";

const BaseTable = ({ fields, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {fields.map((field, index) => (
            <th scope="col" key={index}>
              {field}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((data) => (
          <Row key={data.id} id={data.id} name={data.name} score={data.score} />
        ))}
      </tbody>
    </table>
  );
};

BaseTable.propTypes = {
  fields: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default BaseTable;
