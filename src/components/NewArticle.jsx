import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import ArticleServices from "../services/article/article_services";

const validate = values => {
    const errors = {};

    if (!values.title) errors.title = 'Required';
    else if (values.title.length < 10) errors.title = 'Title must be atleast 10 characters';

    if (!values.description) errors.description = 'Required';
    else if (values.description.length < 10) errors.title = 'Description must be atleast 10 characters';

    if (!values.body) errors.body = 'Required';
    else if (values.body.length < 50) errors.body = 'Body must be atleast 50 characters';
    return errors;
};

export default function SignUp(props) {

    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('user')) {

        }
        else {
            alert('Please log in first');
            history.push("/login");
        }
    }, [])

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            body: '',
        },
        validate,
        onSubmit: async (values) => {
            try {
                const response = await ArticleServices.createArticle(values.title, values.description, values.body);
                alert("Successful");
                history.push("/");
            }
            catch (e) {
                formik.errors.general = "Unsuccessful please try again later";
            }
        }
    });

    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    className="form-control"
                    id=""
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                {formik.errors.title ? <div className="error text-danger">{formik.errors.title}</div> : null}
                <label htmlFor="description">Description</label>
                <input
                    className="form-control"
                    id="description"
                    name="description"
                    type="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                />
                {formik.errors.description ? <div className="error text-danger">{formik.errors.description}</div> : null}
                <div className="form-group">
                    <label htmlFor="">Body</label>
                    <textarea
                        rows = {20}
                        className="form-control"
                        id="body"
                        name="body"
                        type="body"
                        onChange={formik.handleChange}
                        value={formik.values.body}
                    />
                </div>
                {formik.errors.body ? <div className="error text-danger">{formik.errors.body}</div> : null}
                <button type="submit" variant="primary">Submit</button>
                {formik.errors.general ? <div className="error text-danger"> {formik.errors.general}</div> : null}
            </form>
        </div>
    );
};