import React, { useEffect } from "react";
import { Form, Modal } from "antd";
import { observer } from "mobx-react";
import TodoEditor from "../TodoEditor/TodoEditor";

const TodoModal = observer(({ AppState }) => {
  const [form] = Form.useForm();
  useEffect(() => form.resetFields(), [AppState.modal.id]);

  const {
    modal: { id },
  } = AppState;

  const initialTodoProps = id
    ? AppState.toDoList.todos.find((todo) => todo.id === id)
    : null;

  const onFinish = (values) => {
    console.log("Success:", values);
    initialTodoProps
      ? AppState.toDoList.editToDo(id, values)
      : AppState.toDoList.newToDo(values);
    AppState.modal.closeModal();
  };

  return (
    <>
      <Modal
        title="Describe your plan"
        visible={AppState.modal.isOpened}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              onFinish(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        okText={initialTodoProps ? "Edit" : "Create"}
        cancelText="Cancel"
        onCancel={() => AppState.modal.closeModal()}
      >
        <TodoEditor
          AppState={AppState}
          form={form}
          initialTodoProps={initialTodoProps}
        />
      </Modal>
    </>
  );
});

export default TodoModal;
