import styles from "../styles/entrada.module.css";
import Sidebar from "./Sidebar";
import Table from "./table";

export default function Home() {
  return (
    <>
      <div style={{ display: "flex", minHeight: "100%" }}>
        <Sidebar />
        <div className={styles.container}>
          <p className={styles.welcomeMessage}>
            Bem vindo de volta,<strong> Kaique Steck</strong>
          </p>
          <br />
          <h2 className={styles.titleEventos}>Todos eventos</h2>
          <div
            style={{
              position: "relative",
              top: 0,
              left: "100%",
              display: "flex",
              gap: "16px",
              margin: "16px",
            }}
          >
            <input
              type="text"
              placeholder="Buscar eventos"
              className={styles.inputArredondado}
              style={{ maxWidth: 200 }}
            />
            <button className={styles.buttonAdd}>
              <i className="fas fa-plus"></i> Inserir novo
            </button>
          </div>
          <Table />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginRight: "60px",
          marginTop: -60,
          gap: 14,
        }}
      >
        <button
          style={{
            padding: "6px 12px",
            color: "white",
            backgroundColor: "#CC6237",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            marginBottom: "0px",
          }}
        >
          Anterior
        </button>
        <span style={{ fontWeight: "bold", color: "#CC6237", fontSize: 16 }}>
          1
        </span>
        <span style={{ fontWeight: "bold", color: "#CC6237", fontSize: 16 }}>
          2
        </span>
        <span style={{ fontWeight: "bold", color: "#CC6237", fontSize: 16 }}>
          3
        </span>
        <button
          style={{
            padding: "6px 12px",
            border: "1px solid #CC6237",
            background: "#CC6237",
            color: "#fff",
            borderRadius: 4,
            cursor: "pointer",
            fontWeight: "bold",
          }}
          disabled
        >
          Próxima
        </button>
      </div>
    </>
  );
}
