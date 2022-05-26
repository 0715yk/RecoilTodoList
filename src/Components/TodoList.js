import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../states";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
