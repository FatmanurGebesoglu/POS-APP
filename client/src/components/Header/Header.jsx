import React from "react";
import { Input } from "antd";
import { SearchOutlined, HomeOutlined, ShoppingCartOutlined, CopyOutlined,UserOutlined,BarChartOutlined,LogoutOutlined  } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between item-center gap-10">
        <div className="logo">
          <a href="/">
            <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
          </a>
        </div>
        <div className="header-search flex-1">
          <Input
            size="large"
            placeholder="Ürün Ara..."
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]"
          />
        </div>
        <div className="menu-links flex justify-between items-center gap-8">
          <a href={"/"} className="flex flex-col">
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[12px]">Anasayfa</span>
          </a>
          <a href={"/"} className="flex flex-col">
            <ShoppingCartOutlined  className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[12px]">Sepet</span>
          </a>
          <a href={"/"} className="flex flex-col">
            <CopyOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[12px]">Faturalar</span>
          </a>
          <a href={"/"} className="flex flex-col">
            <UserOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[12px]">Müşteriler</span>
          </a>
          <a href={"/"} className="flex flex-col">
            <BarChartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[12px]">İstatistikler</span>
          </a>
          <a href={"/"} className="flex flex-col">
            <LogoutOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[12px]">Çıkış</span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
