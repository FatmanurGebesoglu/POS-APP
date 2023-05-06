import React from "react";
import Header from "../components/Header/Header";
import { Table, Card, Button } from "antd";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const CartPage = () => {
  return (
    <div>
      <Header />
      <div className="px-6">
        <Table dataSource={dataSource} columns={columns} bordered pagination={false} />
        <div className="cart-total flex justify-end mt-4">
          <Card className="w-72">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>102.50₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV Toplam %8</span>
              <span className="text-red-600">+8.72₺</span>
            </div>
            <div className="flex justify-between">
              <b>Toplam </b>
              <b>111.22₺</b>
            </div>
            <Button className="mt-4 w-full" type="primary" size="large">Sipariş Oluştur</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
