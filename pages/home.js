import styles from "../styles/entrada.module.css";
import Sidebar from "./Sidebar";
import Table from "./table";

export default function Home() {
  return (
    <div style={{ display: 'flex', minHeight: '100%' }}>
      <Sidebar />
      <div className={styles.container} >
        <p className={styles.welcomeMessage}>Bem vindo de volta,<strong> Kaique Steck</strong></p>
        <br />
        <h2 className={styles.titleEventos}>Todos eventos</h2>
        <div style={{ position: 'relative', top: 0, left: '100%', display: 'flex', gap: '16px', margin: '16px' }}>
          <input
            type="text"
            placeholder="Buscar eventos"
            className={styles.inputArredondado}
            style={{ maxWidth: 200 }}
            // value e onChange serão implementados no Table futuramente
          />
          <button className={styles.buttonAdd}>
            <i className="fas fa-plus"></i> Inserir novo
          </button>
        </div>
        <Table/>
      </div>
    </div>
  );
}
