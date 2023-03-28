import React from "react";
import { useReducer, useState } from "react";
import styles from "./Profile.module.css";
import { initialState, funcaoReducer } from "./reducer";

export const UserProfile = () => {
  const [pessoa, dispatch] = useState({
    nome: "Michael Nascimento",
    idade: 19,
    profissao: "Desenvolvedor",
    bio: "Bora bio!",
    data_alteracao: null,
  });
  function mudarNome() {
    dispatch({ tipo: "mudar nome", valor: "Michael" });
  }

  function mudarIdade() {
    dispatch({ tipo: "mudar idade", valor: 20 });
  }

  return (
    <div className="profile__container">
      <div className="profile__header">
        <div className="profile__image-container">
          <img src="https://github.com/mikansc.png" alt="Michael" />
        </div>
        <div className="profile__user-data">
          <p>bem vindo de volta,</p>
          <h1 className="profile__name">{pessoa.nome}</h1>
        </div>
      </div>
      <div className="profile__body">
        <div className="profile__orders">
          <h2>Últimos pedidos</h2>
          <div className="profile__orders-container"></div>
        </div>
      </div>
    </div>
  );
};
