import styles from '../styles/entrada.module.css';

export default function TabelaPage() {
  const dados = [
    { nome: 'Clube do Laço Coração Pantaneiro', totalEquipes: 10, ativo: 'Ativo', data: '09 a 11 de Junho' },
    { nome: 'Clube do Laço Coração Pantaneiro', totalEquipes: 10, ativo: 'Ativo', data: '09 a 11 de Junho' },
    { nome: 'Clube do Laço Coração Pantaneiro', totalEquipes: 10, ativo: 'Ativo', data: '09 a 11 de Junho' },
  ];

  return (
    <div className={styles.containerr}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Total de equipes</th>
            <th>Status</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dados.map((usuario, idx) => (
            <tr key={idx}>
              <td>{usuario.nome}</td>
              <td>{usuario.totalEquipes}</td>
              <td style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {usuario.ativo === 'Ativo' && (
                  <span style={{
                    display: 'inline-block',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: 'green',
                  }}></span>
                )}
                {usuario.ativo}
              </td>
              <td>{usuario.data}</td>
              <td style={{ textAlign: 'right' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', height: '28px', justifyContent: 'center' }}>
                  <span style={{ fontSize: '8px', lineHeight: '8px' }}>●</span>
                  <span style={{ fontSize: '8px', lineHeight: '8px' }}>●</span>
                  <span style={{ fontSize: '8px', lineHeight: '8px' }}>●</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
