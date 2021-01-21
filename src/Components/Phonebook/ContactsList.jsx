import { connect } from "react-redux";
import { getVisibleContacts } from "../../redux/selectors";
import { useEffect } from "react";

import { deleteContact, fetchContact } from "../../redux/operations";
import Contact from "./Contact";

function ContactList({ contacts, onDeleteBtnClick, fetchFirst }) {
  useEffect(() => {
    fetchFirst();
  }, []);

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              name={contact.name}
              number={contact.number}
              id={contact.id}
              deleteBtn={() => onDeleteBtnClick(contact.id)}
            />
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchFirst: () => dispatch(fetchContact()),
  onDeleteBtnClick: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
