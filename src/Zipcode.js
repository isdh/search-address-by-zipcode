import React from "react";
import { createURL, fetchAddressFromURL } from "./url";


async function handler (e) {
  const value = e.target.value;
  if (value.length !== 7) return;
  const url = createURL(value);
  console.log(url);
  const addresses = await fetchAddressFromURL(url);
  console.log(addresses);
};

function Zipcode() {

  return (
    <input
      id="zipcode"
      className="text-5xl text-gray-700"
      itemType="text"
      autoFocus
      // placeholder="1230001"
      maxLength="7"
      minLength="7"
      size="8"
      onChange={handler}
    />
  );
}

export default Zipcode;