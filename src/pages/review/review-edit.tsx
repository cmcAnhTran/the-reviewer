import { Typography } from "antd";
import React, { Fragment } from "react";
import { ReviewDetail } from "../../models/review.model";
import { sampleBase64 } from "../../utils/sample-data";
import ReviewForm from "./components/review-form";

const ReviewEdit = () => {
  const { Title } = Typography;
  const data: ReviewDetail = {
    id: '6',
    authorId: '1',
    createdAt: '2011-10-05T14:48:00.000Z',
    title: "dedqd",
    shortDescription: "qdqwqw",
    content: "<p>dqwddqdqd</p>",
    cover: sampleBase64
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
