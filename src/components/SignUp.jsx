import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import AuthServices from "../services/user/auth_services";

const validate = values => {
    const errors = {};

    if(!values.username) errors.username = 'Required';
    else if(values.username.length <= 3) errors.username = 'Username must be atleast 4 characters';

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    }
    else if (values.password.length > 20 || values.password.length < 6) {
        errors.password = 'Password must be >= 6 and <= 20 characters';
    }

    return errors;
};

export default function SignUp(props) {

    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('user')) history.goBack();
    }, [])

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validate,
        onSubmit: async (values) => {
            try {
            const response = await AuthServices.register(values.username, values.email, values.password);
            alert("Sign up successful");
            history.push("/login");
            }
            catch(e) {
                formik.errors.general = "Unsuccessful please try again later";
            }
        }
    });

    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Username</label>
                <input
                    className="form-control"
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                {formik.errors.username ? <div className="error text-danger">{formik.errors.username}</div> : null}
                <label htmlFor="email">Email Address</label>
                <input
                    className="form-control"
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email ? <div className="error text-danger">{formik.errors.email}</div> : null}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-control"
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
                {formik.errors.password ? <div className="error text-danger">{formik.errors.password}</div> : null}
                <button type="submit" variant="primary">Submit</button>
                {formik.errors.general ? <div className="error text-danger"> {formik.errors.general}</div> : null} 
            </form>
        </div>
    );
};