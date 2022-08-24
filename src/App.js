import "./App.css";
import Nav from "./Nav";
import Article from "./Article";
import data from "./data";
import { v4 as uuidv4 } from "uuid";
import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  const articles = data.map((item) => {
    return <Article key={uuidv4()} {...item} />;
  });

  return (
    <>
      <Nav />
      <section>{articles}</section>
    </>
  );
}

export default App;
