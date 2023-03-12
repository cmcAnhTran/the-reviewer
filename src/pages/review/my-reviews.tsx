import { Typography } from 'antd'
import React from 'react'
import VerticalList from '../../components/vertical-list/vertical-list';
import { reviewList } from '../../utils/sample-data';

function MyReviews() {
  const { Title } = Typography;
  const data = reviewList
  return (
    <div>
      <Title level={2}>My Reviews</Title>
      <VerticalList items={data} />
    </div>
  )
}

export default MyReviews
