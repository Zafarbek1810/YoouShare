import { useState } from 'react';
import styles from './Dashboard.module.css';

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dashboard}>
      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
        <h1 className={styles.logo}>Dashboard</h1>
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <a href="#" className={styles.navItem}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={styles.navItem}>
                Profile
              </a>
            </li>
            <li>
              <a href="#" className={styles.navItem}>
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`${styles.content} ${isOpen ? styles.contentWithSidebar : styles.contentFullScreen}`}>
        <button className={styles.toggleButton} onClick={toggleSidebar}>
          {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};
