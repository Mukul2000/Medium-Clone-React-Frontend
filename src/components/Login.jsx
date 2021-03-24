import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import AuthServices from "../services/user/auth_services";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
    const errors = {};
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

export default function Login(props) {

    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('user')) history.goBack();
    }, [])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: async (values) => {
            try {
            const response = await AuthServices.login(values.email, values.password);
            console.log(response);
            localStorage.setItem('user', JSON.stringify(response.user))
            props.location.loginStat.setLogin(true);
            history.push("/");
            }
            catch(e) {
                formik.errors.general = "Incorrect email or password";
            }
        }
    });

    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
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