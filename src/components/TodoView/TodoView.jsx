import { observer } from "mobx-react";
import { List, Avatar } from "antd";
import { RestOutlined, EditOutlined } from "@ant-design/icons";

const TodoView = observer(({ AppState }) => {
  const getIdByIndex = (idx) =>
    AppState.toDoList.todos.find((todo, index) => index === idx).id;
  const todos = AppState.toDoList.todos.slice();
  return (
    <List
      itemLayout="horizontal"
      dataSource={todos}
      renderItem={(todo, index) => (
        <List.Item
          actions={[
            <EditOutlined
              onClick={() => AppState.modal.openModal(getIdByIndex(index))}
            />,
            <RestOutlined
              onClick={() => AppState.toDoList.removeToDo(todo.id)}
            />,
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={todo.title}
            description={todo.description}
          />
        </List.Item>
      )}
    />
  );
});

export default TodoView;
