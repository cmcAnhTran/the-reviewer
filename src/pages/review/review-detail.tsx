import { Space, Typography } from 'antd';
import React from 'react';

const ReviewDetail = () => {
    const { Title, Text } = Typography;
    
    const data = {
        title: "dedqd",
        description: "qdqwqw",
        content: "<p>dqwddqdqd</p>",
    }
    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Title level={2}>{data.title}</Title>
            <Text strong>{data.description}</Text>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </Space>
    );
};

export default ReviewDetail;