import React, { useState } from "react";
import "./Contact.scss";
import * as yup from "yup";

import { Formik, Form, Field, FormikState, FormikHelpers } from "formik";

import { send } from "@emailjs/browser";
import { motion } from "framer-motion";

const contactSchema = yup.object().shape({
  subject: yup.string(),
  email: yup
    .string()
    .email("Email is invalid.")
    .required("Email is required.")
    .matches(
      /^[a-z0-9.]+@[a-z0-9.]+\.[a-z]{2,4}$/,
      "Email can contain only letters (a-z), numbers (0-9) and dots(.)."
    ),
  message: yup.string().required("Message is required."),
});

const initialContactValues = {
  subject: "",
  email: "",
  message: "",
};

type FormValues = {
  [key: string]: any;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  console.log(loading);

  const onSubmit = async (
    values: FormValues,
    helpers: FormikHelpers<FormValues>
  ) => {
    setLoading(true);
    setError("");

    send("service_cz9d09g", "template_ivx2tpn", values, "zIo1A7_py4nBPSuE-")
      .then((response) => {
        setLoading(false);
        setSubmitted(true);
      })
      .catch((error) => {
        setError("Something went wrong while sending.");
      });
  };

  const handleFormSubmit = async (
    values: FormValues,
    helpers: FormikHelpers<FormValues>
  ) => {
    await onSubmit(values, helpers);
  };

  return (
    <div id="contact" className="app__contact">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialContactValues}
        validationSchema={contactSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          resetForm,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="form">
            <div>
              <div>
                {!submitted ? (
                  <>
                    <h2>Reach out to me!</h2>
                    <p>
                      Do you have feedback,
                      <br /> want to work together
                      <br /> or just say hi?
                    </p>
                    <label className=".input__label" htmlFor="email">
                      Email
                    </label>
                    <motion.input
                      id="email"
                      type="text"
                      name="email"
                      placeholder="Your email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      whileInView={{ x: [-300, 0], opacity: [0, 1] }}
                    />
                    <label className=".input__label" htmlFor="subject">
                      Subject
                    </label>
                    <motion.input
                      id="subject"
                      type="text"
                      name="subject"
                      placeholder="How can we help?"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.subject}
                      whileInView={{ x: [-300, 0], opacity: [0, 1] }}
                      transition={{ delay: 0.2 }}
                    />
                    <label className=".input__label" htmlFor="message">
                      Your Message
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      whileInView={{ x: [-300, 0], opacity: [0, 1] }}
                      transition={{ delay: 0.4 }}
                    />
                  </>
                ) : error ? (
                  error
                ) : (
                  <>
                    <h2>Thank you for your message!</h2>
                    <button type="button" onClick={() => setSubmitted(false)}>
                      New Message?
                    </button>
                  </>
                )}
              </div>
              {errors.email && touched.email && (
                <motion.div>{errors.email}</motion.div>
              )}
              {errors.message && touched.message && (
                <motion.div>{errors.message}</motion.div>
              )}

              {!submitted && (
                <motion.button
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ delay: 0.8 }}
                  type="submit"
                  name="submitButton"
                  disabled={loading === true ? true : false}
                >
                  {loading ? "Loading" : "SEND EMAIL"}
                </motion.button>
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
