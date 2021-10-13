import React from 'react';

export default function Form(props) {

    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h2>Sign Up</h2>

                    <label>First Name
                        <input 
                            value={values.firstName}
                            onChange={onChange}
                            name="name"
                            type="text"
                        />
                    </label>

                    <label>Last Name
                        <input 
                            value={values.lastName}
                            onChange={onChange}
                            name="name"
                            type="text"
                        />
                    </label>

                    <label>Email
                        <input 
                            value={values.email}
                            onChange={onChange}
                            name="email"
                            type="text"
                        />
                    </label>

                    <label>Password
                        <input 
                            value={values.password}
                            onChange={onChange}
                            name="password"
                            type="password"
                        />
                    </label>

                <div>
                    <h4>Do you agree to the Terms of Service?</h4>

                    <label>Yes
                        <input 
                            type="checkbox"
                            name="terms"
                            onChange={onChange}
                            checked={values.terms}
                        />
                    </label>

                </div>
                <button>Submit</button>
            </div>
        </form>
    )
}