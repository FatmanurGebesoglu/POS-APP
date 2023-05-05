import React from "react";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <div className="home px-6 flex justify-between gap-10">
        <div className="categories flex-1 overflow-auto max-h-[calc(100vh-_-112px)] pb-64">
          <Categories />
        </div>
        <div className="products flex-[8]">
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
