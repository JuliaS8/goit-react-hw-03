import React from 'react'

const Contact = ({name, number}) => {
  return (
<li>
    <p>{name}</p>   
    <p>{number}</p>
</li>
    )
}

export default Contact;