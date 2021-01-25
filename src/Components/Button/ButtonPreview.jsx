import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getLanguage } from "../../redux/selectors";
import styles from "./styles.module.css";

function ButtonPreview({ language }) {
  const history = useHistory();
  const match = useLocation();

  const URL = match.pathname.split("/");
  URL[1] = "preview";
  const newURL = URL.join("/");

  let isActive = match.pathname.includes("preview")
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
      {language ? "Preview" : "Превью"}
    </button>
  );
}

const mapStateToProps = (state) => ({ language: getLanguage(state) });

export default connect(mapStateToProps)(ButtonPreview);
