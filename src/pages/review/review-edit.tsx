import { Typography } from "antd";
import React, { Fragment } from "react";
import ReviewForm from "./components/review-form";

const ReviewEdit = () => {
  const { Title } = Typography;
  const data = {
    title: "dedqd",
    description: "qdqwqw",
    content: "<p>dqwddqdqd</p>",
  };
  const onFinish = (payload: any) => {
    console.log("Success:", payload);
  };
  return (
    <Fragment>
      <Title level={2}>Edit Review</Title>
      <ReviewForm data={data} onReviewSubmit={onFinish} />
    </Fragment>
  );
};

export default ReviewEdit;
