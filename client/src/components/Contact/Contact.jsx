import React from 'react'
import styles from "./Contact.module.css"
import { useState } from 'react';
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs"

const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear el objeto con los datos ingresados
    const datos = {
      nombre,
      email,
      descripcion
    };

    // Llamar a una función para manejar el envío de los datos
    enviarDatos(datos);

    // Limpiar los campos del Contact
    setNombre('');
    setEmail('');
    setDescripcion('');
  };

  const enviarDatos = (datos) => {
    // Aquí puedes realizar alguna acción con los datos, como enviarlos a un servidor
    console.log(datos);
  };

  return (
    <div className={styles.container}>
      <h2>Get in touch!</h2>
      <div className={styles.insideBox}>
        <div className={styles.social}>
         <a href="https://www.linkedin.com/in/andres-biasutto/"> <BsLinkedin className={styles.icon} /></a>
         <a href="https://github.com/AndresBiasutto"><BsGithub className={styles.icon} /></a>
        </div>
        <form className={styles.form} id='contact' onSubmit={handleSubmit}>
          <div className={styles.labelAndInput}>
            <label className={styles.label} htmlFor="nombre">Name:</label>
            <input
              className={styles.input}
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <p><span className={styles.span}> {">"} </span> error</p>
          </div>

          <div className={styles.labelAndInput}>
            <label className={styles.label} htmlFor="email">Email:</label>
            <input
              className={styles.input}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p><span className={styles.span}> {">"} </span> error</p>
          </div>

          <div className={styles.labelAndInput}>
            <label className={styles.label} htmlFor="descripcion">Descripción:</label>
            <textarea
              className={`${styles.input} ${styles.textArea}` }
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
            <p><span className={styles.span}> {">"} </span> error</p>
          </div>

          <button className={styles.send} type="submit">Send</button>
        </form>
      </div>

    </div>

  );
};

export default Contact;