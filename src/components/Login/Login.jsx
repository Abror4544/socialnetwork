import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../support/validators';
import { Input, createField } from '../common/FormsControls/FormsControls';
import { login } from '../../redux/auth-reducer';
import s from './Login.module.css';
import { Redirect } from 'react-router-dom';

const maxLength30 = maxLengthCreator(30);

const LoginForm = ({ handleSubmit, error }) => {
    return <form onClick={handleSubmit} className={s.loginform}>
        {createField("Email", "email", [required, maxLength30], Input, "text", s.input)}
        {createField("Password", "password", [required, maxLength30], Input, "password", s.input)}
        {error && <div className={s.formSummaryError}>
            {error}
        </div>}
        <div>
            <button className={s.button}>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"profile"} />
    }

    return <div className={s.formWrapper}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);