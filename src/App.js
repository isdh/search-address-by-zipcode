import React from "react";
import "./output.css";

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
        〒<input
          id='zipcode'
          className="text-5xl text-gray-700"
          itemType="text"
          autoFocus
          placeholder="1230001"
          maxLength="7"
          minLength="7"
          size='8'
        />
        </span>
      </header>
    </div>
  );
}

export default App;
