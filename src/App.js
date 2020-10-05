import React from "react";
import "./output.css";
import Zipcode from "./components/Zipcode";

function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center text-center justify text-white text-2xl">
      <header>
        <h1 className="text-5xl text-red-300">〒 郵便番号検索</h1>
        <br />
        <p className="text-2xl">
          郵便番号を半角数字(ハイフン無し)で入力してしてください。
        </p>
      </header>
      <section>
        <Zipcode />
      </section>
    </div>
  );
}

export default App;
