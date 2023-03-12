import { Image, Form, Input, Button, Upload, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import { ReviewDetail, ReviewRequest } from '../../../models/review.model'
import { useNavigate } from 'react-router-dom'
import './review-form.scss'

interface ReviewFormProps {
  data?: ReviewDetail
  onReviewSubmit: (payload: ReviewRequest) => void
}

const ReviewForm = (props: ReviewFormProps) => {
  //TODO: Implement cover image upload
  const navigate = useNavigate()
  const [content, setContent] = useState('')
  const [form] = Form.useForm<{ title: string; shortDescription: string }>()
  const titleVal = Form.useWatch('title', form)
  const descriptionVal = Form.useWatch('shortDescription', form)

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ]

  useEffect(() => {
    if (props.data?.content) {
      setContent(props.data?.content)
    }
  }, [props.data?.content])

  const onSubmit = () => {
    const payload: ReviewRequest = {
      title: titleVal,
      shortDescription: descriptionVal,
      content: content,
      authorId: 'test',
      cover: '',
      publish: true,
    }
    props.onReviewSubmit(payload)
  }

  const onSaveAsDraft = () => {
    const payload: ReviewRequest = {
      title: titleVal,
      shortDescription: descriptionVal,
      content: content,
      authorId: 'test',
      cover: '',
      publish: false,
    }
    props.onReviewSubmit(payload)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div>
      <Form
        form={form}
        name="review"
        initialValues={props.data}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>

        <Form.Item label="Short Description" name="shortDescription">
          <Input.TextArea />
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
          <Button type="primary" onClick={onSubmit}>
            Submit
          </Button>
          <Button type="default" onClick={onSaveAsDraft}>
            Save As Draft
          </Button>
          <Button type="default" onClick={() => navigate(-1)} danger>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ReviewForm
