import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getLanguage } from "../../redux/selectors";
import styles from "./styles.module.css";

function ButtonDescending({ language }) {
  const history = useHistory();
  const match = useLocation();

  const URL = match.pathname.split("/");

  URL[3] = "descending";
  const newURL = URL.join("/");

  let isActive = match.pathname.includes("descending")
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
      {language ? "Descending" : "По убыванию"}
    </button>
  );
}

const mapStateToProps = (state) => ({ language: getLanguage(state) });

export default connect(mapStateToProps)(ButtonDescending);
