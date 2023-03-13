import React, { FC } from "react";
import ContentCard from "../content-card/content-card";
import { List } from "antd";
import { ReviewListItem } from "../../models/review.model";

export interface ListItem<ReviewListItem> {
  take?: number;
  items: ReviewListItem[];
}

const VerticalList: FC<ListItem<ReviewListItem>> = ({ take, items }) => {
  const displayedItems = take ? items.slice(0, take) : items;
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={displayedItems}
      renderItem={(item, i) => (
        <ContentCard
          key={i}
          id={item.id}
          createdAt={item.createdAt}
          title={item.title}
          cover={item.cover}
          shortDescription={item.shortDescription}
          author={item.author}
        />
      )}
    />
  );
};

VerticalList.propTypes = {};

export default VerticalList;
