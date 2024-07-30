import React from 'react'
import css from './ContactForm.module.css';

const ContactForm = ({onAdd}) => {
        const handleSubmit = e => {
            e.preventDefault();
            onAdd({
                id: Date.now(),
                name: e.target.elements.name.value,
                number: e.target.elements.number.value
            });
            e.target.reset();
        }
        
    return (
    
     <form className={css.form} onSubmit={handleSubmit}>
     <div className={css.formGroup}>
        <label htmlFor="name" className={css.label}>
          Name
          <input
            id="name"
            className={css.input}
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </label>
      </div>
      <div className={css.formGroup}>
        <label htmlFor="number" className={css.label}>
          Number
          <input
            id="number"
            className={css.input}
            type="number"
            name="number"
            placeholder="Number"
            required
          />
        </label>
      </div>
     <button type="submit" className={css.addContactBtn}>Add contact</button>

</form>
    )
}

export default ContactForm;