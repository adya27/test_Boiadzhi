import { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  sortByAgeAsc,
  sortByAgeDesc,
  sortByIdAsc,
  sortByIdDsc,
  sortByNameAsc,
  sortByNameDesc,
} from "../../JS/sort";
import { filterData } from "../../redux/actions";
import { fetchData } from "../../redux/operations";
import { getFilteredData } from "../../redux/selectors";
import CardPreview from "../Card/CardPreview";
import styles from "./CardList.module.css";

function CardList({ data, fetchContacts, dispatchFilter }) {
  useEffect(() => {
    fetchContacts();
    if (window.location.search.split("=")[1]) {
      dispatchFilter(window.location.search.split("=")[1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const match = useLocation();
  const pathname = match.pathname;

  return (
    <>
      <ul className={styles.containerPreview}>
        {(pathname === "/preview" ||
          pathname === "/preview/id" ||
          pathname === "/preview/id/ascending") &&
          sortByIdAsc(data).map((contact) => (
            <CardPreview key={contact.id} items={contact} />
          ))}
        {pathname === "/preview/id/descending" &&
          sortByIdDsc(data).map((contact) => (
            <CardPreview key={contact.id} items={contact} />
          ))}
        {(pathname === "/preview/age" ||
          pathname === "/preview/age/ascending") &&
          sortByAgeAsc(data).map((contact) => (
            <CardPreview key={contact.id} items={contact} />
          ))}
        {pathname === "/preview/age/descending" &&
          sortByAgeDesc(data).map((contact) => (
            <CardPreview key={contact.id} items={contact} />
          ))}
        {(pathname === "/preview/name" ||
          pathname === "/preview/name/ascending") &&
          sortByNameAsc(data).map((contact) => (
            <CardPreview key={contact.id} items={contact} />
          ))}
        {pathname === "/preview/name/descending" &&
          sortByNameDesc(data).map((contact) => (
            <CardPreview key={contact.id} items={contact} />
          ))}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => ({
  data: getFilteredData(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchData()),
  dispatchFilter: (query) => dispatch(filterData(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
