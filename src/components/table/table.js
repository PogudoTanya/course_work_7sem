import React from "react";
import PropTypes from "prop-types";
import "./table.css";
import { Button } from "../../components/button/index";
import UserService from "../../UserService";

export function Table({ data, columns, callback, onRowClick }) {
  async function deleteParticipant(id) {
    try {
      UserService.deleteUsers(id).then(() => {
        callback();
      });

    } catch (err) {
      console.log("Error: ", err);
    }
  }

  return (
    <table className="table">
      <thead>
        <tr className="thead">
          {columns.map((header) => (
            <th key={header.name} className="headers">
              <div className="headers__container">{header.name}</div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item._id}
            className="row"
            onClick={() => {
              onRowClick(item.id);
            }}
          >
            {columns.map((column) => (
              <td key={column.name} className="cell">
                {column.get(item)}
              </td>
            ))}
            {/* <Button
              onClick={() => {
                deleteParticipant(item.id);
              }}
            >
              Delete
            </Button> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      get: PropTypes.func.isRequired,
      sortable: PropTypes.bool,
    })
  ).isRequired,
  onRowClick: PropTypes.func,
};

Table.defaultProps = {
  onRowClick: () => {},
};
