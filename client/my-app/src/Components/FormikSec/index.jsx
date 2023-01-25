import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './index.scss'

const SignupForm = () => {
    return (
        <Formik
            initialValues={{ name: '', description: '', price: '' }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(8000, 'Must be 15 characters or less')
                    .required('Required'),
                description: Yup.string()
                    .max(8000, 'Must be 20 characters or less')
                    .required('Required'),
            })}
            onSubmit={(values) => {
                axios.post("http://localhost:1221/users", values)
            }}
        >
            <section className='formik'>
                <Form>
                    <label htmlFor="name"> Name</label>
                    <Field name="name" type="text" />

                    <label htmlFor="description">Description</label>
                    <Field name="description" type="text" />

                    <label htmlFor="price">Price </label>
                    <Field name="price" type="number" />

                    <button type="submit">Submit</button>
                </Form>
            </section>

        </Formik>
    );
};

export default SignupForm