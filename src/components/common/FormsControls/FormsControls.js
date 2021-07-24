import React from "react";
import { Field } from "redux-form";
import s from "./FormsControls.module.css";

const FormControl = ({ input, meta: { touched, error }, child, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={`${s.formControl} ${hasError ? s.error : ""}`}>
      <div>{props.children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      {" "}
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder,
  name,
  validators,
  component,
  type,
  className
) => (
  <div>
    <Field
      name={name}
      component={component}
      validate={validators}
      className={className}
      type={type}
      placeholder={placeholder}
    />
  </div>
);
