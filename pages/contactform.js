import React from "react";
import useOuterClick from "../utils/useOuterClick";
import styles from "../styles/contactForm.module.css";
export function ContactForm(props) {
  const innerRef = useOuterClick((ev) => {
    if (props.contactForm) {
      props.toggleForm();
    }
  });
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
          <form className={styles.form}>
            <header className={styles.formHeader}>
              <h1>Lets Talk!</h1>
              <p>
                We will get back to you within one to two days through email.
                Also please don't forget to check your spam account just in
                case!
              </p>
            </header>
            <div className={styles.formGroup}>
              <input className={styles.input} required={true}></input>
              <div className={styles.label}>Name</div>
            </div>
            <div className={styles.formGroup}>
              <input className={styles.input} required={true}></input>
              <div className={styles.label}>Email</div>
            </div>
            <div className={styles.formGroup}>
              <input className={styles.input} required={true}></input>
              <div className={styles.label}>Subject</div>
            </div>
            <div className={styles.formGroup} style={{ marginTop: "43px" }}>
              <textarea className={styles.textarea} required={true}></textarea>
              <div className={styles.txtareaLabel}>Message</div>
            </div>

            <button className={styles.submitBtn}>Send</button>
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
            transition: all .5s;
            z-index: -99;
          }

          .backgroundShow {
            z-index: 25;
            background: rgba(0, 0, 0, 0.9);
            opacity: 1;
            transition: all 0.5s;
          }
          .formContainerShow {
            transform: translateY(0) !important;
            transition: all .5s;
          }
          .formContainer {
            position: relative;
            background: #ffffff;
            max-width: 700px;
            margin: 0 auto;
            padding: 62px 20px;
            border-radius: 1px 91px 1px 91px;
            height: 100vh;
            transform: translateY(-100%);
            transition: all 0.5s;
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
