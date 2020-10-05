import React from "react";

function TableCell(props) {
  return <th className="table-cell border px-4 py-2 font-normal">{props.address}</th>;
}

function AddressBody(props) {
  return (
    <tbody id="address_data">
      {props.data.map((address, i) => {
        const { address1, address2, address3 } = address;
        return (
          <tr key={i}>
            <TableCell address={address1 + address2 + address3} />
            <TableCell address={address1} />
            <TableCell address={address2} />
            <TableCell address={address3} />
          </tr>
        );
      })}
    </tbody>
  );
}

export default AddressBody;
