import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../../actions";
import styles from "./RegisterPage.module.css";

function RegisterPage() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const registering = useSelector((state) => state.registration.registering);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (user.firstName && user.lastName && user.username && user.password) {
      dispatch(userActions.register(user));
    }
  }

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={styles.overlayPanel}>
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <Link to="/login" className="">
                <button
                  className={styles.button + " " + styles.ghost}
                  id="signUp"
                >
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.title}>Register</h1>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className={
                  "form-control" +
                  (submitted && !user.firstName ? " is-invalid" : "")
                }
              />
              {submitted && !user.firstName && (
                <div className="invalid-feedback">First Name is required</div>
              )}
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className={
                  "form-control" +
                  (submitted && !user.lastName ? " is-invalid" : "")
                }
              />
              {submitted && !user.lastName && (
                <div className="invalid-feedback">Last Name is required</div>
              )}
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                placeholder="Username"
                className={
                  "form-control" +
                  (submitted && !user.username ? " is-invalid" : "")
                }
              />
              {submitted && !user.username && (
                <div className="invalid-feedback">Username is required</div>
              )}
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Password"
                className={
                  "form-control" +
                  (submitted && !user.password ? " is-invalid" : "")
                }
              />
              {submitted && !user.password && (
                <div className="invalid-feedback">Password is required</div>
              )}
              <button className={styles.button}>
                {registering && <span className=""></span>}
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export { RegisterPage };
