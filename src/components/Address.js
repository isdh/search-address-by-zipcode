import React from "react";
import AddressData from "./addressData";
import NoAddressData from "./noAddressData";

function Address(props) {
  return (
    <div className='mt-10'>
      {props.data === undefined ? (
        <>
        <h1>通信エラーが発生しました。</h1>
        <h4 className='text-3xl'>住所が取得できませんでした。通信状態を確認してください。</h4>
        </>
      ) : props.data === null ? (
        <>
          <h2 className="text-3xl font-bold">検索結果</h2>
          <NoAddressData />
        </>
      ) : props.data.length !== 0 ? (
        <>
        <h2 className="text-3xl font-bold">検索結果：{props.data.length}件</h2>
        <AddressData data={props.data} />
        </>
      ) : (
        <>
        </>
      )}
    </div>
  );
}

export default Address;
