import { Button, Card, Form, Input, Space } from "antd";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { path } from "../../constants/path";
import { AppContext } from "../../context/app.context";
import { SignupPayload } from "../../models/user.model";

const Login = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AppContext);
  const onFinish = (values: any) => {
    const listAccounts = localStorage.getItem("account")
      ? JSON.parse(localStorage.getItem("account") || "")
      : [];

    const isMatch = listAccounts.find((item: SignupPayload) => {
      if (
        item.username === values.username &&
        item.password === values.password
      ) {
        return item;
      }
    });
    if (!isMatch) {
      toast.error("Username or Password wrong", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    localStorage.setItem("isLogin", values.username);
    setIsAuth(true);
    navigate({
      pathname: path.dashboard,
    });
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
        <Link to={path.signup}>Didn't have an account? Sign up here!</Link>
      </Card>
    </Space>
  );
};

export default Login;
