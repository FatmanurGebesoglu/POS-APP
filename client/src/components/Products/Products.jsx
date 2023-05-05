import React from "react";

const Products = () => {
  return (
    <div className="products-wrapper grid grid-cols-card gap-4  ">
      <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none">
        <div className="product-img">
          <img
            src="https://parade.com/.image/t_share/MTkwNTgxNDY1MzcxMTkxMTY0/different-types-of-apples-jpg.jpg"
            alt="apple"
            className="h-28 object-cover w-full border-b"
          />
        </div>
        <div className="product-info flex flex-col p-3">
          <span className="font-bold">Elma</span>
          <span>12₺</span>
        </div>
      </div>
      <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none">
        <div className="product-img">
          <img
            src="https://t4.ftcdn.net/jpg/02/20/02/41/360_F_220024121_lvQqND2X6YcINIlgNwTXcwC5Ws6no0RQ.jpg"
            alt="apple"
            className="h-28 object-cover w-full border-b"
          />
        </div>
        <div className="product-info flex flex-col p-3">
          <span className="font-bold">Portakal</span>
          <span>15₺</span>
        </div>
      </div>
      <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none">
        <div className="product-img">
          <img
            src="https://clv.h-cdn.co/assets/15/22/2048x2048/square-1432664914-strawberry-facts1.jpg"
            alt="apple"
            className="h-28 object-cover w-full border-b"
          />
        </div>
        <div className="product-info flex flex-col p-3">
          <span className="font-bold">Çilek</span>
          <span>30₺</span>
        </div>
      </div>
      <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none">
        <div className="product-img">
          <img
            src="https://images.everydayhealth.com/images/diet-nutrition/all-about-bananas-nutrition-facts-health-benefits-recipes-and-more-rm-722x406.jpg"
            alt="apple"
            className="h-28 object-cover w-full border-b"
          />
        </div>
        <div className="product-info flex flex-col p-3">
          <span className="font-bold">Muz</span>
          <span>35₺</span>
        </div>
      </div>
      <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none">
        <div className="product-img">
          <img
            src="https://cdn.yemek.com/mncrop/620/388/uploads/2020/01/karpuzun-nasil-yetistirilr.jpg"
            alt="apple"
            className="h-28 object-cover w-full border-b"
          />
        </div>
        <div className="product-info flex flex-col p-3">
          <span className="font-bold">Karpuz</span>
          <span>50₺</span>
        </div>
      </div>
    </div>
  );
};

export default Products;
