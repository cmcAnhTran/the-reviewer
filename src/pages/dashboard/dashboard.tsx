import {
  theme,
  Layout,
  Menu,
  Divider,
  Card,
  Avatar,
  List,
  Space,
  Button,
  Typography,
} from "antd";
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
  ListItem,
} from "../../components/vertical-list/vertical-list";
import { useNavigate } from "react-router-dom";
import { ReviewListItem, ReviewRequestExtend } from "../../models/review.model";
import { reviewList } from "../../utils/sample-data";
import store from "../../utils/Store";

const Dashboard = () => {
  const { Title } = Typography;
  const navigate = useNavigate();
  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // const myReviews: ListItem<ReviewListItem> = {
  //   take: 5,
  //   items: reviewList,
  // };

  const navigateToCreate = () => {
    navigate({ pathname: "/create" });
  };
  const reviews = store.getListReviews().filter((item: any) => !item.isDraft) || [];
  return (
    <div>
      <Title level={2}>Dashboard</Title>
      <Button onClick={navigateToCreate} type="primary" size="large">
        Create your review!
      </Button>
      {/* <Divider orientation="left">My Reviews</Divider> */}
      {reviews.length ? (
        reviews.map((item: ReviewRequestExtend) => (
          <Card title={item.title} bordered={false} key={item.id}>
            {item.shortDescription}
            <div dangerouslySetInnerHTML={{ __html: item.content }} />
          </Card>
        ))
      ) : (
        <div
          style={{
            marginTop: "30px",
            color: "#ccc",
            fontSize: "18px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          There is no data
        </div>
      )}
    </div>
  );
};

export default Dashboard;
