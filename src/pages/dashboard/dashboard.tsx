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
import VerticalList, { ListItem } from "../../components/vertical-list/vertical-list";
import { useNavigate } from "react-router-dom";
import { ReviewListItem } from "../../models/review.model";
import { reviewList } from "../../utils/sample-data";

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

  const myReviews: ListItem<ReviewListItem> = {
    take: 5,
    items: reviewList,
  };

  const navigateToCreate = () => {
    navigate({pathname: '/create' })
  }

  return (
    <div>
          <Title level={2}>Dashboard</Title>
          <Button onClick={navigateToCreate} type="primary" size='large'>
            Create your review!
          </Button>
            <Divider orientation="left">My Reviews</Divider>
            <VerticalList take={myReviews.take} items={myReviews.items} />

            <Divider orientation="left">Top Reviews</Divider>
            <VerticalList take={myReviews.take} items={myReviews.items} />
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
