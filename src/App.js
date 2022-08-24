import "./App.css";
import Nav from "./Nav";
import Article from "./Article";
import data from "./data";

function App() {
  const articles = data.map((item) => {
    return <Article key={item.id} {...item} />;
  });

  return (
    <>
      <Nav />
      <section>{articles}</section>
    </>
  );
}

export default App;
