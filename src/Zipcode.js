import React, {useState, useEffect} from "react";
import { createURL, fetchAddressFromURL } from "./url";
import Address from "./Address";

function Zipcode() {
  const [code, setCode] = useState('');
  const [url, setUrl] = useState('');
  const [addresses, setAddress] = useState([]);

  const handler = (e) => {
    const value = e.target.value;

    // データが変わっていなければ処理しない
    if (value === code) return;
    if (value.length !== 7) return;
    setCode(value);
    const url = createURL(value);
    setUrl(url);
  };

  useEffect(() => {
    if (code.length !== 7) return;
    const fetchData = async () => {
      const addresses = await fetchAddressFromURL(url);
      setAddress(addresses);
    };
    fetchData();
  }, [code]);

  return (
    <>
    <span className='text-5xl'>
    〒<input
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
    </span>
    <br />
    <Address data={addresses}/>
    </>
  );
}

export default Zipcode;