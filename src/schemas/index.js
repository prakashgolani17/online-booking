


import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).required("name is required"),
    email: Yup.string().email("Please enter valid email").required("enter email here"),
    // password: Yup.string().required('password must be at least 8 characters').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    // "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
    // Type: Yup.string().required("enter please Type"),
});