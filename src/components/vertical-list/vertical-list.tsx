import React, { FC } from 'react';
import PropTypes from 'prop-types';
import ContentCard, { CardItem } from '../content-card/content-card';
import { List } from 'antd';

export interface ItemsList {
    take?: number,
    items: CardItem[]
}

const VerticalList: FC<ItemsList> = ({ take, items }) => {
    const displayedItems = take ? items.slice(0, take) : items;
    return (
        <List
        itemLayout="vertical"
        size="large"
        dataSource={displayedItems}
        renderItem={(item) => (
          <ContentCard
            title={item.title}
            cover={item.cover}
            shortDescription={item.shortDescription}
            author={item.author}
          />
        )}
      />
    );
};

VerticalList.propTypes = {
    
};

export default VerticalList;