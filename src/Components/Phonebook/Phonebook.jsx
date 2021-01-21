import React, { useState } from "react";
import styles from "./Phonebook.module.css";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addContact } from "../../redux/operations";
import { getContacts, getLoading } from "../../redux/selectors";

function Phonebook({ handleSubmit, loading, contacts }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleAddName = (e) => {
    const { value } = e.currentTarget;
    setName(value);
  };

  const handleAddNumber = (e) => {
    const { value } = e.currentTarget;
    setNumber(value);
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (contacts.map((contact) => contact.name).includes(name)) {
      alert(`${name} is already exists in contacts`);
      return;
    }
    handleSubmit({ id: uuidv4(), name, number });
    reset();
  };

  return (
    <div>
      <h2>Phonebook {loading && <span>loading...</span>}</h2>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input1}
            name={"name"}
            onChange={handleAddName}
            value={name}
            type="text"
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input2}
            name={"number"}
            onChange={handleAddNumber}
            value={number}
            type="text"
          />
        </label>
        <button className={styles.input1} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => ({
  loading: getLoading(state),
  contacts: getContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (contact) => dispatch(addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
