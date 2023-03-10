import { theme, Layout, Menu, Button } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";
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

const Container = () => {
  const navigate = useNavigate()

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
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "dashboard",
              icon: <UserOutlined />,
              label: (
                <Link to="/dashboard">
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
              key: "edit",
              icon: <VideoCameraOutlined />,
              label: (
                <Link to="/edit">
                <span>Edit Review</span>
              </Link>
              ),
            },
            {
              key: "sample-detail",
              icon: <VideoCameraOutlined />,
              label: (
                <Link to="/sample-detail">
                <span>Detail</span>
              </Link>
              ),
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "auto" }}>
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
            }}
          >
            {/* <Switch>
              <Route path={path}>
              <Dashboard />
              </Route>
              <Route path={`create-review`}>
                <ReviewCreate />
              </Route>
            </Switch> */}
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Container;
