import ScrollAnimation from "react-animate-on-scroll";
import { connect } from "react-redux";
import * as allImg from "../../images/image";
import { toggleFavorite } from "../../redux/actions";
import { getLanguage } from "../../redux/selectors";

import styles from "./CardTable.module.css";

function CardTable({ items, language, toggleFavorite }) {
  const { image, name, age, phone, favourite } = items;

  return (
    <li className={styles.container}>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <ul className={styles.contactsList}>
          <li>
            <img src={allImg[image]} alt={image} width="100px" />
          </li>
          <li>
            <h3 className={styles.contactsItem}>{name}</h3>
          </li>
          <li>
            <h3>
              {age} {language ? "years" : "лет"}
            </h3>
          </li>
          <li>
            <h3>{phone}</h3>
          </li>

          <li className={styles.favorite} onClick={() => toggleFavorite(items)}>
            {favourite ? (
              <img
                className={styles.favorite}
                src={allImg.starFilled}
                alt={image}
                width="40px"
              />
            ) : (
              <img
                className={styles.favorite}
                src={allImg.star}
                alt={image}
                width="40px"
              />
            )}
          </li>
        </ul>
      </ScrollAnimation>
    </li>
  );
}

const mapStateToProps = (state) => ({ language: getLanguage(state) });

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (item) => dispatch(toggleFavorite(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardTable);
