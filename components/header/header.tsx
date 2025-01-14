import Logo from "../../assets/icons/logo.svg";
import Image from "next/image";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo_container}>
        <Image className={styles.logo} src={Logo} alt="Logo" width={48} height={48} />
        <div className={styles.logo_glow_container} />
      </div>
    </header>
  );
};

export default Header;
