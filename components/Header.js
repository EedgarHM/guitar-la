import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/dist/client/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
       <div className={styles.barra}>
       <div>
          <Link href="/">
            <Image
              src="/img/logo.svg"
              width={400}
              height={100}
              alt="Logotipo de tienda de guitarras"
            />
            
          </Link>
        </div>
        <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotrs</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/tienda">Tienda</Link>
        </nav>
       </div>
      </div>
    </header>
  );
};

export default Header;
