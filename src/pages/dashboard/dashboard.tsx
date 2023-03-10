import { theme, Layout, Menu, Divider, Card, Avatar, List, Space, Button, Typography } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import VirtualList from "rc-virtual-list";
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

import "./dashboard.scss";
import ContentCard from "../../components/content-card/content-card";
import VerticalList, {
  ItemsList,
} from "../../components/vertical-list/vertical-list";
import { Navigate, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { Title } = Typography;
  const navigate = useNavigate()
  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const data = [
    {
      title: "Title 1",
      cover:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      shortDescription: "This is the description",
      author: {
        username: "name",
        avatar: "https://joesch.moe/api/v1/random",
      },
    },
    {
      title: "Title 2",
      cover:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      shortDescription: "This is the description",
      author: {
        username: "name",
        avatar: "https://joesch.moe/api/v1/random",
      },
    },
    {
      title: "Title 3",
      cover:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      shortDescription: "This is the description",
      author: {
        username: "name",
        avatar: "https://joesch.moe/api/v1/random",
      },
    },
    {
      title: "Title 4",
      cover:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      shortDescription: "This is the description",
      author: {
        username: "name",
        avatar: "https://joesch.moe/api/v1/random",
      },
    },
    {
      title: "Title 5",
      cover:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      shortDescription: "This is the description",
      author: {
        username: "name",
        avatar: "https://joesch.moe/api/v1/random",
      },
    },
    {
      title: "Title 6",
      cover:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      shortDescription: "This is the description",
      author: {
        username: "name",
        avatar: "https://joesch.moe/api/v1/random",
      },
    },
  ];

  const myReviews: ItemsList = {
    take: 5,
    items: data,
  };

  const navigateToCreate = () => {
    navigate({pathname: '/create' })
  }

  return (
    <div>
          <Title level={2}>Dashboard</Title>
          <Button onClick={navigateToCreate} type="link" size='large'>
            Create your review!
          </Button>
            <Divider orientation="left">My Reviews</Divider>
            <VerticalList take={myReviews.take} items={myReviews.items} />

            <Divider orientation="left">Top Reviews</Divider>
            <List itemLayout="vertical" size="large">
              <VirtualList
                data={data}
                height={400}
                itemHeight={47}
                itemKey="email"
              >
                {(item) => (
                  <List.Item
                    key={item.title}
                    actions={[
                      <IconText
                        icon={StarOutlined}
                        text="156"
                        key="list-vertical-star-o"
                      />,
                      <IconText
                        icon={LikeOutlined}
                        text="156"
                        key="list-vertical-like-o"
                      />,
                      <IconText
                        icon={MessageOutlined}
                        text="2"
                        key="list-vertical-message"
                      />,
                    ]}
                    extra={<img width={272} alt="logo" src={item.cover} />}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.author.avatar} />}
                      title={<a href="/">{item.title}</a>}
                    />
                    {item.shortDescription}
                  </List.Item>
                )}
              </VirtualList>
            </List>
            <Divider orientation="left">Latest Reviews</Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
              merninisti licere mihi ista probare, quae sunt a te dicta? Refert
              tamen, quo modo.
            </p>
            <Divider orientation="left">Community News</Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
              merninisti licere mihi ista probare, quae sunt a te dicta? Refert
              tamen, quo modo.
            </p>
    </div>

          
  );
};

export default Dashboard;
