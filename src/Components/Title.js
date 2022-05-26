import { Container } from "../styles/title";

const Title = ({ title = "TodoList" }) => {
  return <Container>{title}</Container>;
};

export default Title;
