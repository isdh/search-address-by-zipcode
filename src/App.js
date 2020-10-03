import React from "react";
import "./output.css";
import Zipcode from "./Zipcode";

function App() {
  return (
    <div className="App">
      <header className="bg-black min-h-screen flex flex-col items-center text-center justify text-white text-6xl">
        <h1 className="text-9xl text-red-300">〒 郵便番号検索</h1>
        <br />
        <p className="text-2xl">
          郵便番号をハイフン無しで入力してしてください。
        </p>
        <br />
        <span className='text-5xl'>
        〒<Zipcode />
        </span>
      </header>
    </div>
  );
}

export default App;
