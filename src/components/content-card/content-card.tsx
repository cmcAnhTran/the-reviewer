import React from "react";
import { Avatar, List, Typography } from "antd";
import { ReviewListItem } from "../../models/review.model";

const ContentCard = (props: ReviewListItem) => {
  const { Text } = Typography;
  return (
    <List.Item
      key={props.id}
      extra={<img width={272} alt="logo" src={props.cover} />}
    >
      <List.Item.Meta
        // avatar={<Avatar src={props.author.avatar} />}
        title={<a href="/">{props.title}</a>}
        description={<Text type="secondary">{props.shortDescription}</Text>}
      />
      {props.shortDescription}
    </List.Item>
  );
};

export default ContentCard;
