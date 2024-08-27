import { useState } from 'react';
import styles from './Dashboard.module.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Button } from 'antd';

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dashboard}>
      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
        <div className={`${styles.logoWrapper}`}>
          <h1 className={styles.logo}>Dashboard</h1>
          <Button onClick={toggleSidebar}>{!isOpen ? <IoIosArrowForward /> : <IoIosArrowBack />}</Button>
        </div>
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
          <Button className={`${styles.toggleButton}`} onClick={toggleSidebar}>{!isOpen ? <IoIosArrowForward /> : <IoIosArrowBack />}</Button>
        <div>{children}</div>
      </div>
    </div>
  );
};
