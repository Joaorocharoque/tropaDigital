import Link from "next/link";
import { useState } from "react";
import { Eye } from "lucide-react";
import styles from "../styles/entrada.module.css";

export default function Home() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div
      className={styles.wrapper}
      style={{ display: "flex", minHeight: "100%" }}
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
        <div >
        <img align="left" className={styles.logoTela1} src="/img/logo.PNG" alt="Logo" />
        </div>
        <h1 className={styles.label}>Bem-vindo de volta</h1>
        <h2 className={styles.h2}>
          Entre com sua conta para acessar o painel.
        </h2>
        <div align="left">
          <p className={styles.label}> E-mail</p>
          <input
            type="text"
            placeholder="seunome@seuservidor.com"
            className={styles.inputArredondado}
          />
        </div>
        <br />
        <div align="left">
          <p className={styles.label}>Senha</p>
          <div style={{ position: 'relative', width: '100%' }}>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Digite aqui"
              className={styles.inputArredondado}
              style={{ paddingRight: 40 }}
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              aria-label={passwordVisible ? "Esconder senha" : "Mostrar senha"}
              style={{
                position: 'absolute',
                right: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                color: '#CC6237'
              }}
            >
              <Eye  size={20} 
              style={{
                color: passwordVisible ? "#CC6237" : "#999",
                transition: "color 0.2s",
                marginLeft: "-150px",
              }}/>
            </button>
          </div>
          <br />
          <Link href="/home">
            <button align="left" className={styles.enviar}>Enviar</button>
          </Link>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          background: "#CC6237",
          borderRadius: "20px",
          width: "300px",
          height: "610px",
          justifyContent: "flex-start"
        }}
      >
        <img
          src="/img/login.PNG"
          alt="Fundo"
            className="loginImageHideOnMobile"

          style={{ width: "90%", height: "80%", marginLeft: "-100px", marginBottom: "-28%" }}
        />
      </div>
    </div>
  );
}
