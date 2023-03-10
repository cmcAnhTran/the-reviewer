import React from "react";
import { Button, Card, Form, Input, Space, Typography } from "antd";

const Login = () => {
    const { Link } = Typography;
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Space
      direction="horizontal"
      align="center"
      style={{ width: "100%", justifyContent: "center", height: "100vh"
    }}
    >
      <Card style={{ width: 500 }}>
        <Form
          name="login"
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
            labelAlign="left"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            labelAlign="left"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Link href="/signup">Didn't have an account? Sign up here!</Link>
      </Card>
    </Space>
  );
};

export default Login;
