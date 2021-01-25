import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { filterData } from "../../redux/actions";
import { Debounce } from "react-throttle";
import { useHistory, useLocation } from "react-router-dom";
import { getLanguage } from "../../redux/selectors";

function Filter({ dispatchFilter, language }) {
  const { register } = useForm();
  const location = useLocation();
  const history = useHistory();
  const placeholder = language ? "type your search here" : "Поиск..";

  const handleFilter = (e) => {
    const { value } = e.currentTarget;

    history.push({ ...location, search: `query=${value}` });
    dispatchFilter(value);
  };

  return (
    // <Debounce time="100" handler="onChange">
    <input
      onChange={handleFilter}
      name="example"
      placeholder={placeholder}
      ref={register}
      autoComplete="off"
    />
    // </Debounce>
  );
}
const mapStateToProps = (state) => ({ language: getLanguage(state) });
const mapDispatchToProps = (dispatch) => ({
  dispatchFilter: (query) => dispatch(filterData(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
