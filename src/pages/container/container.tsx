import { theme, Layout, Menu, Button } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React, { useContext, useMemo } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
} from "@ant-design/icons";
import Dashboard from "../dashboard/dashboard";
import ReviewCreate from "../review/review-create";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { path } from "../../constants/path";
import { AppContext } from "../../context/app.context";
import { Logo } from "../../assets";

const Container = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AppContext);
  const handleLogout = () => {
    setIsAuth(false);
    localStorage.removeItem("isLogin");
  };
  const login = () => {
    navigate({
      pathname: "/login",
    });
  };
  const MENU_SIDE_BAR = [
    {
      key: "dashboard",
      icon: <UserOutlined />,
      label: (
        <Link to={path.dashboard}>
          <span>Dashboard</span>
        </Link>
      ),
    },
    {
      key: "create",
      icon: <VideoCameraOutlined />,
      label: (
        <Link to="/create">
          <span>Create Review</span>
        </Link>
      ),
    },
    {
      key: "my-review",
      icon: <VideoCameraOutlined />,
      label: (
        <Link to="/my-review">
          <span>My Reviews</span>
        </Link>
      ),
    },
    {
      key: "logout",
      icon: <VideoCameraOutlined />,
      label: (
        <span style={{ display: "block" }} onClick={handleLogout}>
          Logout
        </span>
      ),
    },
    {
      key: "login",
      icon: <VideoCameraOutlined />,
      label: (
        <Link to={path.login}>
          <span>Login</span>
        </Link>
      ),
    },
  ];
  const sideBarItem = useMemo(() => {
    if (!isAuth) {
      return MENU_SIDE_BAR.filter(
        (item) => !["create", "edit", "logout"].includes(item.key)
      );
    }
    return MENU_SIDE_BAR.filter((item) => !["login"].includes(item.key));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider style={{ height: "100vh" }}>
      <Sider
        trigger={null}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo">
          <img
            src={Logo}
            alt=""
            style={{
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={sideBarItem}
        />
      </Sider>

      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content
          style={{ margin: "24px 16px 0", overflow: "auto", minHeight: "90vh" }}
        >
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
              minHeight: "100%",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Container;
