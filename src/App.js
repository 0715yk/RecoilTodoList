import { RecoilRoot } from "recoil";
import TodoList from "./Components/TodoList";
import Title from "./Components/Title";
import Stats from "./Components/Stats";

function App() {
  return (
    <RecoilRoot>
      <Title title={"Recoil Todolist"} />
      <Stats />
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
