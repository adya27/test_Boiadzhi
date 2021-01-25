import { connect } from "react-redux";
import * as allImg from "../../images/image";
import * as allVideo from "../../videos/video";
import { toggleFavorite } from "../../redux/actions";
import { getLanguage } from "../../redux/selectors";
import ScrollAnimation from "react-animate-on-scroll";
import { useEffect, useRef } from "react";

import styles from "./CardTable.module.css";

function CardPreview({ items, language, toggleFavorite }) {
  const { image, name, age, phone, favourite, phrase, video } = items;
  const currentVideo = useRef(null);

  useEffect(() => {
    if (document.documentElement.clientWidth > 600) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting && currentVideo.current) {
              currentVideo.current.pause();
            } else if (entry.isIntersecting && currentVideo.current) {
              currentVideo.current.play();
            }
          });
        },
        { threshold: 0.5 }
      );

      if (currentVideo.current) {
        observer.observe(currentVideo.current);
      }
    }
  }, []);

  return (
    <li
      // className={styles.containerLi}
      style={
        !video && document.documentElement.clientWidth > 600
          ? { width: "50%" }
          : { width: "100%" }
      }
    >
      <ScrollAnimation
        className={styles.containerLi}
        animateIn="fadeIn"
        animateOnce={true}
      >
        <div
          className={styles.infoContainer}
          style={
            !video && document.documentElement.clientWidth > 600
              ? { width: "90%" }
              : { width: "45%" }
          }
        >
          <ul className={styles.contactsListDataHor}>
            <li>
              <img src={allImg[image]} alt={image} width="50px" />
            </li>
            <li>
              <h3 className={styles.contactsItem}>{name}</h3>
            </li>

            <li
              className={styles.favorite}
              onClick={() => toggleFavorite(items)}
            >
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

          <ul className={styles.contactsListDataVert}>
            <li>
              <h3>
                {age} {language ? "years" : "лет"}
              </h3>
            </li>

            <li>
              <h3>{phone}</h3>
            </li>

            <li>
              <h3>{phrase}</h3>
            </li>
          </ul>
        </div>

        {video && (
          <div className={styles.videoContainer}>
            <video
              ref={currentVideo}
              controls
              muted
              loop
              src={allVideo[video]}
              alt={video}
              width="80%"
            />
          </div>
        )}
      </ScrollAnimation>
    </li>
  );
}

const mapStateToProps = (state) => ({ language: getLanguage(state) });

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (item) => dispatch(toggleFavorite(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardPreview);
