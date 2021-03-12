import React from "react";
import { Form, Input, DatePicker, Switch } from "antd";
import { observer } from "mobx-react";

const TodoEditor = observer(({ AppState, form, initialTodoProps }) => {
  return (
    <Form
      labelCol={{
        span: 10,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={initialTodoProps}
      form={form}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input title!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input />
      </Form.Item>
      <Form.Item label="DatePicker" name="date">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Important" name="important">
        <Switch />
      </Form.Item>
    </Form>
  );
});

export default TodoEditor;
