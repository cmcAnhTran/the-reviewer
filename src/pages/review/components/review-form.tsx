import { Typography, Form, Input, Button, Upload } from "antd";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { UploadOutlined } from '@ant-design/icons';


interface Review {
  title: string;
  description: string;
  content: string;
}

interface ReviewFormProps {
  data?: Review;
  onReviewSubmit: (payload: Review) => void;
}

const ReviewForm = (props: ReviewFormProps) => {
  const [content, setContent] = useState("");
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
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
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

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  useEffect(() => {
    if (props.data?.content) {
      setContent(props.data?.content);
    }
  }, [props.data?.content]);

  const onFinish = (values: any) => {
    const payload = {
      title: values.title,
      description: values.description,
      content: content,
    };
    props.onReviewSubmit(payload);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="review"
        initialValues={props.data}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>

        <Form.Item label="Short Description" name="description">
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          name="cover"
          label="Cover"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item style={{ height: 350 }} label="Content">
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ReviewForm;
