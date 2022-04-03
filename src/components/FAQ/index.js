import React from "react";
import styles from "./Accordion.module.css";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FAQData as data } from "./data";

export default function Accordion() {
  return (
    <>
      <section className={styles.accordionSection}>
        <div className={styles.container}>
          {data.map((question) => {
            return (
              <div key={question.id}>
                <div className={styles.wrapper}>
                  <h1>{question.question}</h1>
                </div>
                <p>{question.answer}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
