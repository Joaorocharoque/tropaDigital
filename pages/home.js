import styles from "../styles/entrada.module.css";
import Sidebar from "./Sidebar";
import Table from "./table";

export default function Home() {
  return (
    <>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar />
        <div className={styles.container}>
          <p className={styles.welcomeMessage}>
            Bem vindo de volta,<strong style={{ color: "black" }}> Kaique Steck</strong>
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
            <div style={{ position: 'relative', width: 200 }}> <span style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'left',
                pointerEvents: 'none',
                color: '#00000033',
                left: 10,
                fontSize: 18
              }}>
                <i className="fas fa-search"></i>
              </span>
              <input 
                type="text"
                placeholder="Buscar eventos"
                className={styles.inputArredondado}
                style={{ maxWidth: 200, paddingRight: 36 , right: 36, paddingLeft: 36 }}
              />
             
            </div>&nbsp;&nbsp;
            <button className={styles.buttonAdd}>
              <i className="fas fa-plus"></i> Inserir novo
            </button>
          </div>
          <Table />
          <div 
        style={{
          display: "flex",
          alignItems: "right",
          alignContent: "right",
          marginLeft: "122%",
          marginTop: 0,
          gap: 14,
        }}
      >
        <button
          style={{
            padding: "6px 12px",
            color: "black",
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
        <button style={{fontSize: 20 , color: "#CC6237", background: "#CC6237",borderRadius: "200px", padding: "6px 12px", border: "none", cursor: "pointer" }}>
        <span style={{ fontWeight: "bold", color: "white",  fontSize: 14 }}>
          1
        </span></button> &nbsp;
        <button style={{ border: "none", cursor: "pointer" }}>
        <span style={{  color: "black", fontSize: 14 }}>
          2
        </span></button> &nbsp;
        <button style={{ border: "none", color:"white", cursor: "pointer" }}><span style={{  color: "#000000", fontSize: 14 }}>
          3
        </span></button> &nbsp;
        <button
          style={{
            marginBottom: "",
            padding: "12px 12px",
            border: "1px solid #CC6237",
            background: "#CC6237",
            color: "#fff",
            borderRadius: 22,
            cursor: "pointer",
            fontFamily:"roboto, sans-serif",
          }}
          disabled
        >
          Próxima
        </button>
      </div>
        </div>
      </div>
      
    </>
  );
}
