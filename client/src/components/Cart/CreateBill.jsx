import { Form, Input, Modal, Select, Card, Button } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <Modal
      title="Fatura Oluştur"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
      onFinish={onFinish}
    >
      <Form layout={"vertical"}>
        <Form.Item
          label="Müşteri Adı"
          name={"customerName"}
          rules={[{ required: true, message: "Lütfen bu alanı doldurunuz!" }]}
        >
          <Input placeholder="Bir Müşteri Adı Giriniz" />
        </Form.Item>
        <Form.Item
          label="Telefon Numarası"
          name={"phoneNumber"}
          rules={[{ required: true, message: "Lütfen bu alanı doldurunuz!" }]}
        >
          <Input placeholder="Bir Telefon Numarası Giriniz" maxLength={11} />
        </Form.Item>
        <Form.Item
          label="Ödeme Yöntemi"
          name={"paymentMethod"}
          rules={[{ required: true, message: "Lütfen bu alanı doldurunuz!" }]}
        >
          <Select placeholder="Bir ödeme yöntemi seçiniz">
            <Select.Option value="Nakit">Nakit</Select.Option>
            <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
          </Select>
        </Form.Item>
        <div className="cart-total flex justify-end mt-4">
          <Card className="w-full">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>549.00₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV Toplam %8</span>
              <span className="text-red-600">+43.92₺</span>
            </div>
            <div className="flex justify-between">
              <b>Toplam</b>
              <b>592.92₺</b>
            </div>
            <div className="flex justify-end">
              <Button
                className="mt-4"
                type="primary"
                size="large"
                onClick={() => setIsModalOpen(true)}
                htmlType="submit"
              >
                Sipariş Oluştur
              </Button>
            </div>
          </Card>
        </div>
      </Form>
    </Modal>
  );
};

export default CreateBill;
