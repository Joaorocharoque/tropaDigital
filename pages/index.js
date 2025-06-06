import Link from "next/link";
import { useState } from "react";
import { Eye } from "lucide-react";
import styles from "../styles/entrada.module.css";

export default function Home() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div
      className={styles.wrapper}
      style={{ display: "flex", minHeight: "100vh" }}
    >
      <div
        className={styles.conteudo}
        align="center"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>
          <img className={styles.logo} src="/img/logo.PNG" alt="Logo" />
        </div>
        <h1 className={styles.label}>Bem-vindo de volta</h1>
        <h2 className={styles.h2}>
          Entre com sua conta para acessar o painel.
        </h2>
        <div>
          <p className={styles.label}> Label do Input</p>
          <input
            type="text"
            placeholder="Digite aqui"
            className={styles.inputArredondado}
          />
        </div>
        <br />
        <div>
          <p className={styles.label}>Senha</p>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Digite aqui"
              className={styles.inputArredondado}
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              aria-label={passwordVisible ? "Esconder senha" : "Mostrar senha"}
            >
              <Eye size={20} />
            </button>
          </div>
          <br />
          <Link href="/home">
            <button className={styles.enviar}>Enviar</button>
          </Link>
        </div>
        <br />
        <Link href="/login">
          <button className={styles.enviar}>Registrar-se</button>
        </Link>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#CC6237",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <img
          className={styles.fundo}
          src="/img/login.PNG"
          alt="Fundo"
          style={{ width: "100%", height: "80vh", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
