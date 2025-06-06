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
    </aside>
  );
}
