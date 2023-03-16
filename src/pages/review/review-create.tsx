import { Button, Form, Input, Typography } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { path } from "../../constants/path";
import {
  ReviewDetail,
  ReviewRequest,
  ReviewRequestExtend,
} from "../../models/review.model";
import store from "../../utils/Store";
import { NotificationToast, randomUnixNumber } from "../../utils/utils";
import ReviewForm from "./components/review-form";
interface ReviewFormProps {
  data?: ReviewDetail;
  onReviewSubmit: (
    payload: ReviewRequest,
    handleResetContent: () => void
  ) => void;
}

const ReviewCreate = () => {
  const { Title } = Typography;
  const [content, setContent] = useState("");
  const [form] = Form.useForm<{ title: string; shortDescription: string }>();
  const titleVal = Form.useWatch("title", form);
  const descriptionVal = Form.useWatch("shortDescription", form);
  const [reviewDraft, setReviewDraft] = useState<ReviewRequestExtend | null>(
    null
  );
  const navigate = useNavigate();

  const onSubmit = () => {
    const payload: ReviewRequest = {
      title: titleVal,
      shortDescription: descriptionVal,
      content: content,
      authorId: "test",
      cover: "",
      publish: true,
    };
  };

  const onSaveAsDraft = () => {
    const payload: ReviewRequest = {
      title: titleVal,
      shortDescription: descriptionVal,
      content: content,
      authorId: "test",
      cover: "",
      publish: false,
    };
  };
  const handleResetContent = () => {
    setContent("");
    form.resetFields();
  };
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];
  const onFinish = (isDraft: boolean = false) => {
    if (reviewDraft) {
      store.editReview({
        title: titleVal,
        shortDescription: descriptionVal,
        content: content,
        authorId: reviewDraft.authorId,
        cover: "",
        publish: false,
        id: reviewDraft.id,
        isDraft,
      });
    } else {
      store.addReview({
        title: titleVal,
        shortDescription: descriptionVal,
        content: content,
        authorId: store.getUser(),
        cover: "",
        publish: false,
        id: randomUnixNumber(),
        isDraft,
      });
    }

    if (!isDraft) {
      handleResetContent();
      NotificationToast({
        type: "success",
        title: "Create Review Successfully",
      });
    } else {
      NotificationToast({
        type: "success",
        title: "Save As Draft Successfully",
      });
    }
  };

  useEffect(() => {
    const editItem = store.getDraft();
    console.log("editItem", editItem);
    if (store.getDraft()) {
      const editItem = store.getDraft();
      console.log("editItem", editItem);
      form.setFieldValue("title", editItem?.title);
      form.setFieldValue("shortDescription", editItem?.shortDescription);
      setContent(editItem?.content || "");
      setReviewDraft(store.getDraft() as ReviewRequestExtend);
    }
  }, []);
  return (
    <Fragment>
      <Title level={2}>Create Review</Title>
      <div>
        <Form
          form={form}
          name="review"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
          onFinish={() => onFinish(false)}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Title is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Short Description"
            name="shortDescription"
            rules={[{ required: true, message: "Description is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            style={{ height: 350 }}
            label="Content"
            rules={[{ required: true, message: "Please input Detail!" }]}
          >
            <ReactQuill
              style={{ height: 300 }}
              modules={modules}
              formats={formats}
              theme="snow"
              value={content}
              onChange={setContent}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" style={{marginRight: '10px'}}>
              Submit
            </Button>
            <Button type="default" style={{marginRight: '10px'}} onClick={() => onFinish(true)}>
              Save As Draft
            </Button>
            <Button
              type="default"
              onClick={() =>
                navigate({
                  pathname: path.dashboard,
                })
              }
              danger
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </div>
      {/* <ReviewForm onReviewSubmit={onFinish} /> */}
    </Fragment>
  );
};

export default ReviewCreate;
