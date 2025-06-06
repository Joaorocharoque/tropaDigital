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
        <h2  className={styles.titleEventos}>Todos eventos</h2>
        <Table/>
      </div>
    </div>
  );
}
