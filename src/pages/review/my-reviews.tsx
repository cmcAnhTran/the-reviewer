import { Typography } from "antd";
import Card from "antd/es/card/Card";
import React from "react";
import VerticalList from "../../components/vertical-list/vertical-list";
import { ReviewRequestExtend } from "../../models/review.model";
import { reviewList } from "../../utils/sample-data";
import store from "../../utils/Store";

function MyReviews() {
  const { Title } = Typography;
  const data = reviewList;
  const reviews = store.getMyReview().filter((item: any) => !item.isDraft) || [];

  return (
    <div>
      <Title level={2}>My Reviews</Title>
      {/* <VerticalList items={data} /> */}
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
}

export default MyReviews;
