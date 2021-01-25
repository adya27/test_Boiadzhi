import { connect } from "react-redux";
import { toggleLanguage } from "../../redux/actions";
import { getLanguage } from "../../redux/selectors";
import styles from "./styles.module.css";

function ButtonLang({ handleClick, language }) {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={() => handleClick(!language)}
    >
      {language ? "RUS" : "ENG"}
    </button>
  );
}
const mapStateToProps = (state) => ({ language: getLanguage(state) });

const mapDispatchToProps = (dispatch) => ({
  handleClick: (language) => dispatch(toggleLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonLang);
