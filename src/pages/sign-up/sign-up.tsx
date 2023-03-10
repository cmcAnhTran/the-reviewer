import React from "react";
import {
  AutoComplete,
  Button,
  Card,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Typography,
} from "antd";
interface SignUpPayload {
  username: string;
  password: string;
  confirm: string;
  email: string;
}

const Signup = () => {
    const { Link } = Typography;
  const onFinish = (values: SignUpPayload) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Space
      direction="horizontal"
      align="center"
      style={{ width: "100%", justifyContent: "center", height: "100vh" }}
    >
      <Card style={{ width: 500 }}>
        <Form
          name="signup"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid Email!",
              },
              { required: true, message: "Please input your Email!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Link href="/">Already had an account?</Link>
      </Card>
    </Space>
  );
};

export default Signup;
