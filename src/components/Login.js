import React from 'react';
import {Link} from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css'

class Login extends React.Component {
    render() {
        return (
            <>
            <h3 className="pb-3" style={{fontFamily:'Gabriola',fontWeight:'bold'}}>Login</h3>
            <Formik
                initialValues={{
                    userName: '',
                    password: '',
                }}
                validationSchema={Yup.object().shape({
                    userName: Yup.string()
                        .required('User Name is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required')
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="userName" style={{fontFamily:'Gabriola',fontWeight:'bold'}}>User Name</label>
                            <Field name="userName" type="text" className={'form-control' + (errors.userName && touched.userName ? ' is-invalid' : '')} />
                            <ErrorMessage name="userName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" style={{fontFamily:'Gabriola',fontWeight:'bold'}}>Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2 pinkBtn" style={{fontFamily:'Gabriola'}}>Login</button>
                            <button type="reset" className="btn btn-secondary" style={{fontFamily:'Gabriola'}}>Cancel</button>
                        </div>
                    </Form>

                )}
            />
            <Link to="/register">
                <p>Not a member? Register</p>
            </Link>
            </>
        )
    }
}
export default Login