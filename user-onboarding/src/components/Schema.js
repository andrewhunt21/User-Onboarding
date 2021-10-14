import * as yup from 'yup';

const schema = yup.object().shape({
    firstName: yup
        .string()
        .trim()
        .required('you got a first name dont yah?')
        .min(2, 'names literally gotta be more than one letter'),
    lastName: yup
        .string()
        .trim()
        .required('unless youre Seal you got a last name!')
        .min(2, 'minimum is 2!'),
    email: yup
        .string()
        .email('it must be a valid email')
        .required('an email is required!'),
    password: yup
        .string()
        .trim()
        .required('a password is required!'),
    terms: yup.boolean(),
});

export default schema;