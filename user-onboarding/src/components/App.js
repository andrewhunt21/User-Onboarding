import React, { useState } from 'react';
import axios from 'axios';
import Form from './Form';

const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  terms: false,
}

function App() {

  const [formValues, setFormValues] = useState(initialFormValues);

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.error(err);
      }).finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const inputChange = (name, value) => {
    // validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: ['yes'].filter(term => !!formValues[term])
    }
    postNewUser(newUser);
  }

  return (
    <div className="App">
      <h1>Hellooooo</h1>
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
      />
    </div>
  );
}

export default App;
