import { Table } from "antd";
import Header from "../components/Header/Header.jsx";
import { useState } from "react";
import { useEffect } from "react";


const CustomersPage = () => {


  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getBills = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bills/get-all");
        const data = await res.json();
        setCustomers(data);
      } catch (error) {
        console.log(error);
      }
    };

    getBills();
  }, []);

  
  const columns = [
    {
      title: "Müşteri Adı",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Telefon Numarası",
      dataIndex: "customerPhoneNumber",
      key: "customerPhoneNumber",
    },
    {
      title: "İşlem Tarihi",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => {
        return <span>{text.substring(0, 10)}</span>;
      }
    },
  ];


  return (
    <>
      <Header />
      <h1 className="text-4xl font-bold text-center mb-4">Müşterilerim</h1>
      <div className="px-6">
        <Table
          dataSource={customers}
          columns={columns}
          bordered
          pagination={false}
          scroll={{
            x:1000,
            y:300
          }}
        />
      </div>
    </>
  );
};

export default CustomersPage;
