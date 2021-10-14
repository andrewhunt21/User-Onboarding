import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import Form from './Form';
import User from './User';
import schema from './Schema';

const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

const initialUsers = []

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const getUser = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers([res.data]);
      }).catch(err => {
        console.error(err);
      })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data], );
      }).catch(err => {
        console.error(err);
      }).finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
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

  useEffect(() => {
    getUser()
  },[])

  return (
    <div className="App">
      <h1>New User Form</h1>
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
      />
      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  );
}

export default App;
