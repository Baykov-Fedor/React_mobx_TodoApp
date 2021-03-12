import { observer } from "mobx-react";
import TodoView from "../TodoView/TodoView";
import { PlusOutlined } from "@ant-design/icons";
import TodoModal from "../TodoModal/TodoModal";
import { Button } from "antd";

const TodoPage = observer(({ AppState }) => {
  return (
    <>
      <TodoView AppState={AppState} />
      <Button
        onClick={() => AppState.modal.openModal()}
        type="primary"
        shape="circle"
        icon={<PlusOutlined />}
        size="large"
      />
      <TodoModal AppState={AppState} />
    </>
  );
});

export default TodoPage;
