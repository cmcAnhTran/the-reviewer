import React from "react";
import PropTypes from "prop-types";
import { Avatar, List, Space } from "antd";
import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
} from "@ant-design/icons";

interface User {
  username: string;
  avatar: string;
  email?: string;
}

export interface CardItem {
  title: string;
  cover: string;
  shortDescription: string;
  author: User;
}

const ContentCard = (props: CardItem) => {
  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  return (
    <List.Item
      key={props.title}
      actions={[
        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
        <IconText
          icon={MessageOutlined}
          text="2"
          key="list-vertical-message"
        />,
      ]}
      extra={<img width={272} alt="logo" src={props.cover} />}
    >
      <List.Item.Meta
        avatar={<Avatar src={props.author.avatar} />}
        title={<a href="/">{props.title}</a>}
      />
      {props.shortDescription}
    </List.Item>
  );
};

export default ContentCard;
