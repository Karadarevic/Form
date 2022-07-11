import React, { useState } from "react";
import "./index.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  //recebe dados do formulário
  const valueInput = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  //Enviar dados para o back-end
  const addUser = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    //constante fixa, o default é true
    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: "success",
        mensagem: "Usuário cadastrado com sucesso",
      });
      setUser({
        name: "",
        lastname: "",
        email: "",
        password: "",
      });
    } else {
      setStatus({ type: "error", mensagem: "Erro: Usuário não cadastrado" });
    }
  };

  function validate(e) {
    e.preventDefault();
    if (!user.name)
      return setStatus({
        type: "error",
        mensagem: "First Name cannot be empty ",
      });
    if (!user.lastname)
      return setStatus({
        type: "error2",
        mensagem: "Last Name cannot be empty ",
      });
    if (!user.email)
      return setStatus({
        type: "error3",
        mensagem: "Invalid e-mail",
      });
    if (!user.password)
      return setStatus({
        type: "error4",
        mensagem: "Invalid password",
      });
    else {
    }
  }

  return (
    <form onSubmit={validate} className="form">
      <input
        type="text"
        name="name"
        className="name"
        placeholder="First Name"
        onChange={valueInput}
        value={user.name}
      />
      <label>
        {status.type === "error" ? (
          <p className="error">{status.mensagem}</p>
        ) : (
          ""
        )}
      </label>

      <input
        type="text"
        name="lastname"
        className="lastName"
        placeholder="Last Name"
        onChange={valueInput}
        value={user.lastname}
      />
      <label>
        {" "}
        {status.type === "error2" ? (
          <p className="error">{status.mensagem}</p>
        ) : (
          ""
        )}
      </label>

      <input
        type="text"
        name="email"
        className="email"
        placeholder="Email Adress"
        onChange={valueInput}
        value={user.email}
      />
      <label>
        {status.type === "error3" ? (
          <p className="error">{status.mensagem}</p>
        ) : (
          ""
        )}
      </label>

      <input
        type="password"
        name="password"
        className="password"
        placeholder="Password"
        onChange={valueInput}
        value={user.password}
      />
      <label>
        {" "}
        {status.type === "error4" ? (
          <p className="error">{status.mensagem}</p>
        ) : (
          ""
        )}
      </label>

      <button type="submit" className="claim" onChange={addUser}>
        {" "}
        CLAIM YOUR FREE TRIAL
      </button>
      <footer>
        {" "}
        By clicking the button you are agreeing to our{" "}
        <a href="#">Terms and Services </a>
      </footer>
    </form>
  );
};
