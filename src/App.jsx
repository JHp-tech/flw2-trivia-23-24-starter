import Question from "./components/Question";
export default function App() {
  const currentQuestionNumber = 0;
  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>
      <Question question={data[currentQuestionNumber].text} />
    </div>
  );
}
