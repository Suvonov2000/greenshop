import { Divider, Form, Input } from "antd";
import {
  FacebookOutlined,
  GoogleOutlined,
  QrcodeOutlined,
} from "@ant-design/icons";

const Register = () => {
  return (
    <div className="w-[80%] m-auto">
      <h3 className="text-sm mt-8 font-normal">
        Enter your email and password to register
      </h3>
      <Form
        className="mt-4"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 32 }}
        style={{ maxWidth: "100%" }}
        initialValues={{ remember: true }}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your surname!" }]}
        >
          <Input placeholder="Surname" />
        </Form.Item>

        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Enter email address" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Coniform your password" />
        </Form.Item>

        <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[45px] my-[27px]">
          Register
        </button>
      </Form>

      <Divider>Or register with</Divider>

      <button
        type="button"
        className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px] "
      >
        <GoogleOutlined className="pl-[15px]" />
        Login with Google
      </button>

      <button
        type="button"
        className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px] "
      >
        <FacebookOutlined className="pl-[15px]" />
        Login with Facebook
      </button>
    </div>
  );
};
export default Register;
