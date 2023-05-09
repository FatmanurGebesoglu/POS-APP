import { Modal} from "antd";

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <Modal
      title="Fatura Yazdır"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
      onFinish={onFinish}
    >
      Fatura
    </Modal>
  );
};

export default PrintBill;
