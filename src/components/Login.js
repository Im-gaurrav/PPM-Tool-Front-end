import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import {Jumbotron} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ApiService from "../services/ApiService";
// import dashboard from "./Dashboard";
export var accessToken = "null";
export var email = "null";

const Login = (props) => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(true);
      }, 500);
    ApiService.login(values.email, values.password)
            .then(res => {
              console.log(res.data.user.id);
              console.log(res.data.accessToken);
              accessToken=res.data.accessToken;
              email = values.email;
              console.log(accessToken);
                // this.setState({message : 'Project added successfully.'});
                props.history.push(`/dashboard/${values.email}`);
        console.log(values);
            });
    }}


    // ********Handling validation messages yourself*******/
    validate={values => {
      let errors = {};
      if (!values.email) {
        errors.email = "E-mail cannot be blank !";
      } else if (!EmailValidator.validate(values.email)) {
        errors.email = "Invalid email address";
      }

      const passwordRegex = /(?=.*[0-9])/;
      if (!values.password) {
        errors.password = "Password cannot be blank !";
      } else if (values.password.length < 8) {
        errors.password = "Password must be 8 characters long.";
      } else if (!passwordRegex.test(values.password)) {
        errors.password = "Invalid password. Must contain one number";
      }

      return errors;
    }}
    //********Using Yum for validation********/

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return(
        <div className="login">
        <div className="container">
            <Jumbotron>
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Log In</h1>
                    <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <div className="form-group">
          <input 
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            classNames={errors.email && "form-control form-control-lg" && touched.email && "error"}
          /></div>
          {errors.email && touched.email && (
            <div className={"input-feedback"}>{errors.email}</div>
          )}
          <label htmlFor="email">Password</label>
          <div className={"form-group" && "form-control.form-control-lg"}>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password  && touched.password && "error"}
          /></div>
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button type="submit" className="btn btn-info btn-block mt-4" disabled={isSubmitting}>
            Login
          </button>
        </form>
                </div>
            </div>
            </Jumbotron>
        </div>
    </div>
);
    }}
  </Formik>
);

export default Login;
