import Image from "next/image";
import Link from "next/link";

import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="Imagen sobre nosotros"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            hendrerit massa sed eros eleifend, nec feugiat dui bibendum. Nam
            quam dui, congue eu risus quis, interdum gravida erat. Ut dapibus
            sem non augue vestibulum, quis rhoncus nunc volutpat. Duis posuere
            tellus vel purus venenatis vulputate. Aenean ac quam ipsum. Aenean
            at ornare lacus, at ullamcorper erat. Nulla id lorem ante. Donec
            mattis auctor porttitor. Praesent sodales nibh odio, dignissim
            dapibus nisl varius id. Aliquam vitae tortor nec tellus ullamcorper
            iaculis vel sed elit. Suspendisse potenti. Curabitur id laoreet
            urna. Vivamus cursus at purus sit amet vestibulum. Phasellus
            tincidunt sapien ut ante hendrerit, et feugiat libero suscipit.
            Suspendisse non dignissim ante. Quisque vel lobortis nunc. Phasellus
            semper mi id erat auctor, at congue odio lobortis. Proin facilisis
            ornare dui.
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
