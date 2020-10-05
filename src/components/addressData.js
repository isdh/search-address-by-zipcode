import React from 'react';
import AddressBody from './addressBody';
import AddressHeader from './addressHeader';

function AddressData(props) {
  return (
    <div id="addressData">
    <table className="table-auto border border-black">
      <AddressHeader />
      <AddressBody data={props.data}/>
    </table>
  </div>
  )
}

export default AddressData;