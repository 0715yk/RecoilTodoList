import { useSetRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";
import { todoListState } from "../states";
import * as S from "../styles/TodoItemCreator";

let id = 0;
function getId() {
  return id++;
}

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <S.Container>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </S.Container>
  );
}
