import React, { useState } from "react";
import emailjs from "emailjs-com";
import useOuterClick from "../utils/useOuterClick";
import styles from "../styles/contactForm.module.css";
export function ContactForm(props) {
  const innerRef = useOuterClick((ev) => {
    if (props.contactForm) {
      props.toggleForm();
    }
  });
  const [loading, setloading] = useState(false);
  const [success, setsuccess] = useState("");
  const [error, seterror] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    seterror("");
    setsuccess("");
    console.log(e.target)
    emailjs
      .sendForm(
        "service_86k6hq1",
        "template_9p6c4ri",
        e.target,
        "user_B1pHC0qhEjTIVdcOJjo2f"
      )
     
      .then(
        (result) => {
          setloading(false);
          setsuccess(result.text);
        },
        (error) => {
          
          setloading(false);
          seterror(error.text);
        }
      );
  };
  return (
    <>
      <div
        className={
          !props.contactForm ? `background` : `background backgroundShow`
        }
      >
        <div
          className={
            !props.contactForm
              ? `formContainer`
              : `formContainer formContainerShow`
          }
          ref={innerRef}
        >
          <span className={styles.close} onClick={() => props.toggleForm()}>
            +
          </span>
          <form className={styles.form} onSubmit={(e) => handleFormSubmit(e)}  >
            <header className={styles.formHeader}>
              <h1>Lets Talk!</h1>
              <p>
                We will get back to you within one to two days through email.
                Also please don't forget to check your spam account just in
                case!
              </p>
            </header>
            <div className={styles.formGroup}>
              <input className={styles.input} required={true} name="name"></input>
              <div className={styles.label}>Name</div>
            </div>
            <div className={styles.formGroup}>
              <input className={styles.input} required={true} name="email"></input>
              <div className={styles.label}>Email</div>
            </div>
            <div className={styles.formGroup}>
              <input className={styles.input} required={true} name="subject"></input>
              <div className={styles.label}>Subject</div>
            </div>
            <div className={styles.formGroup} style={{ marginTop: "43px" }}>
              <textarea className={styles.textarea} required={true} name="message"></textarea>
              <div className={styles.txtareaLabel}>Message</div>
            </div>
            {loading? <div className="msg">Loading...</div> : ""}
            {success ? <div className="msg green">Successful</div> : ""}
            {error ? <div className="msg red">Failed. Try again.</div> : ""}

            <button className={styles.submitBtn} type="submit"  disabled={loading}  >
              Send
            </button>
          </form>
          <img className={styles.formMask} src="/1.png" />
        </div>
      </div>
      <style jsx>
        {`
          .background {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            opacity: 0;
            transition: all 0.5s;
            z-index: -99;
          }

          .backgroundShow {
            z-index: 25;
            background: rgba(0, 0, 0, 0.9);
            opacity: 1;
            transition: all 0.5s;
            overflow-y: auto;
          }
          .formContainerShow {
            transform: translateY(0) !important;
            transition: all 0.5s;
          }
          .formContainer {
            position: relative;
            background: #ffffff;
            max-width: 700px;
            margin: 0 auto;
            padding: 62px 20px;
            border-radius: 1px 91px 1px 91px;
            min-height: 100vh;
            transform: translateY(-100%);
            transition: all 0.5s;
          }
          .msg {
            text-align: center;
            padding-bottom: 6px;
          }
          .red {
            color: #ff0000;
          }
          .green {
            color: #009e00;
          }
          @media only screen and (max-width: 730px) {
            .formContainer {
              border-radius: 0;
            }
          }
        `}
      </style>
    </>
  );
}
