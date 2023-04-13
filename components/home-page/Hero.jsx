import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/avatar.jpg"
          width={300}
          height={300}
          alt="an image showing me"
        />
      </div>
      <h1>Hi, I'm Bijan</h1>
      <p>
        I'm frontend web developer and working with Javascript and some
        libraries like react and next js
      </p>
    </section>
  );
}

export default Hero;
