import "./App.css";
import { BrowserRouter as Router /*, useLocation */ } from "react-router-dom";

import CardList from "./Components/CardList/CardList";
import Filter from "./Components/Filter/Filter";

import ButtonTable from "./Components/Button/ButtonTable";
import ButtonPreview from "./Components/Button/ButtonPreview";
import ButtonId from "./Components/Button/ButtonId";
import ButtonName from "./Components/Button/ButtonName";
import ButtonAge from "./Components/Button/ButtonAge";
import ButtonAscending from "./Components/Button/ButtonAscending";
import ButtonDescending from "./Components/Button/ButtonDescending";
import ButtonLang from "./Components/Button/ButtonLang";
import CardListPreview from "./Components/CardList/CardListPreview";

function App() {
  return (
    <div className="App">
      <Router>
        <ButtonLang />
        <ButtonTable />
        <ButtonPreview />
        <ButtonId />
        <ButtonName />
        <ButtonAge />
        <ButtonAscending />
        <ButtonDescending />

        <Filter />

        <CardList />
        <CardListPreview />
      </Router>
    </div>
  );
}

export default App;
