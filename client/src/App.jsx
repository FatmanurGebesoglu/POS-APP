import React from "react";
import Header from "./components/Header/Header";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <div className="home px-6 flex justify-between">
        <div className="categories">
          <div>categories</div>
        </div>
        <div className="products">
          <div>products</div>
        </div>
        <div className="cart">
          <div>cart totals</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
