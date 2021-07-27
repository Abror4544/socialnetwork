import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../support/validators';
import { Input, createField } from '../common/FormsControls/FormsControls';
import { login } from '../../redux/auth-reducer';
import s from './Login.module.css';
import { Redirect } from 'react-router-dom';

const maxLength30 = maxLengthCreator(30);

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return <form onClick={handleSubmit} className={s.loginform}>
        {createField("Email", "email", [required, maxLength30], Input, "text", s.input)}
        {createField("Password", "password", [required, maxLength30], Input, "password", s.input)}

        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {}, s.input)}

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
        props.login(formData.email, formData.password, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"profile"} />
    }

    return <div className={s.formWrapper}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);