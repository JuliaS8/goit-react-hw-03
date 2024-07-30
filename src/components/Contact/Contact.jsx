import React from 'react'
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import css from "./Contact.module.css"

const Contact = ({id, name, number, onDelete}) => {
  return (
    <li className={css.contact}>
      <div className={css.contactCard}>
        <div className={css.contactInfo}>
          <div className={css.contactItem}>
            <FaUser className={css.icon} />
            <p>{name}</p>
          </div>
          <div className={css.contactItem}>
            <FaPhoneAlt className={css.icon} />
            <p>{number}</p>
          </div>
        </div>
        <button type="button" className={css.deleteButton} onClick={() => onDelete(id)}>Delete</button>
      </div>
    </li>
    )
}

export default Contact;