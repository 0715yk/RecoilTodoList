import * as S from "../styles/stats";
import TodoListStats from "./TodoListStats";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";

const Stats = () => {
  return (
    <S.Container>
      <TodoListStats />
      <S.InputContainer>
        <TodoListFilters />
        <TodoItemCreator />
      </S.InputContainer>
    </S.Container>
  );
};

export default Stats;
