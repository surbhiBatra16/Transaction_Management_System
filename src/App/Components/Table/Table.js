import React from "react";

const Table = props => {
  const { data } = props;
  let dataKeys = data.length > 0 ? Object.keys(data[0]) : [];
  return (
    <div className="well">
      <table className="table table-striped table-bordered">
        <thead>
          <tr className="info">
            {dataKeys.map((keyItems, index) => (
              <th key={index}>
                {keyItems.replace(/([a-z](?=[A-Z]))/g, "$1 ").toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((dataItems, index) => (
            <tr key={index}>
              <td>{dataItems.transactionId}</td>
              <td>{dataItems.timestamp}</td>
              <td>
                {dataItems.itemDetails.map((items, index) => (
                  <ul className="item-desc" key={index}>
                    <li>
                      <strong>Id : </strong>
                      {items.itemId}
                    </li>
                    <li>
                      <strong>Desc : </strong>
                      {items.itemDesc}
                    </li>
                    <li>
                      <strong>Price: </strong>
                      {items.itemPrice}
                    </li>
                  </ul>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
