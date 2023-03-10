import { Button, Form, Input, Typography } from "antd";
import React, { Fragment, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ReviewForm from "./components/review-form";

const ReviewCreate = () => {
  const { Title } = Typography;

  const onFinish = (payload: any) => {
    console.log("Success:", payload);
  };

  return (
    <Fragment>
      <Title level={2}>Create Review</Title>
      <ReviewForm onReviewSubmit={onFinish} />
    </Fragment>
  );
};

export default ReviewCreate;
