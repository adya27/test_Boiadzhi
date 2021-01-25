import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getLanguage } from "../../redux/selectors";
import styles from "./styles.module.css";

function ButtonTable({ language }) {
  const history = useHistory();
  const match = useLocation();

  const URL = match.pathname.split("/");
  URL[1] = "table";
  const newURL = URL.join("/");

  let isActive = match.pathname.includes("table")
    ? "activeBtn"
    : "notActiveBtn";

  function handleClick() {
    history.push({
      ...match,
      pathname: newURL,
    });
  }
  return (
    <button className={styles[isActive]} type="button" onClick={handleClick}>
      {language ? "Table" : "Таблица"}
    </button>
  );
}

const mapStateToProps = (state) => ({ language: getLanguage(state) });

export default connect(mapStateToProps)(ButtonTable);
