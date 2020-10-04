import React from "react";
import AddressData from "./addressData";
import NoAddressData from "./noAddressData";

function Address(props) {
  return (
    <>
      <h2 className="text-3xl font-bold">検索結果</h2>
      {props.data === null ? (
        <NoAddressData />
      ) : props.data.length !== 0 ? (
        <AddressData data={props.data} />
      ) : (
        <>
        </>
      )}
    </>
  );
}

export default Address;
