// components/Sidebar.tsx
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/entrada.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // <-- importante!

export default function Sidebar() {
  const router = useRouter();

  const menuItems = [
    { label: "Dashboard", icon: "fas fa-th-large", href: "/login"  },
    { label: "Eventos", icon: "fas fa-calendar-alt", href: "/login", active: true},
    { label: "Equipes", icon: "fas fa-users", href: "/login" },
    { label: "Inscrições", icon: "fas fa-user-plus", href: "/login" },
  ];

  return (
    <aside className={styles.sidebar}>
       <img className={styles.logoTela1} src="/img/logo.PNG" alt="Logo" />
      <p className={styles.titleMenu}>MENU</p>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {menuItems.map(({ label, icon, href, active }) => {
          const isActive = active || router.pathname === href;
          return (
            <Link
              key={href + label}
              href={href}
              className={`${styles["menu-item"]} ${isActive ? styles.active : ""}`}
            >
              <span style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <i className={icon}></i>
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
      <div style={{
        marginTop: '100px',
        padding: '24px 0 0 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderTop: '1px solid #eee',
        gap: '10px',
         }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
          <img
            src="/img/login.png"
            alt="Foto de perfil"
            style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover' }}
          />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 'bold', fontSize: 16 }}>Kaique Steck</div>
            <div style={{ color: '#CC6237', fontSize: 14 }}>Administrador</div>
          </div>
        </div>
        <button style={{
          background: '#fff',
          color: '#CC6237',
          border: '1px solid #CC6237',
          borderRadius: 6,
          padding: '6px 16px',
          fontSize: 14,
          cursor: 'pointer',
          marginBottom: 4,
        }}>
          Alterar dados
        </button>
        <button style={{
          background: '#CC6237',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          padding: '6px 16px',
          fontSize: 14,
          cursor: 'pointer',
        }}>
          Sair
        </button>
      </div>
    </aside>
  );
}
