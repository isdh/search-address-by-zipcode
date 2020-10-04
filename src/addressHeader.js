import React from "react";

function AddressHeader() {
  return (
    <thead>
      <tr>
        <AddressHeaderCell name="住所" />
        <AddressHeaderCell name="都道府県名" />
        <AddressHeaderCell name="市区町村名" />
        <AddressHeaderCell name="町域名" />
      </tr>
    </thead>
  );
}

function AddressHeaderCell(props) {
  return <th className="table-cell border px-4 py-2">{props.name}</th>;
}

export default AddressHeader;
