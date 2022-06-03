import styles from "./Intro.module.css";

function Intro() {
  return (
    <div class={styles.pageContainer}>
      <div class={styles.body}>
        <div class={styles.title}>Hi! &#128075; I am Isselin Moektijono</div>
        <div class={styles.paragraph}>
          People often say I look like a Japanese, however I was born in
          Indonesia. &#128539; <br />
          During my university study in Singapore, I took a part-time job
          creating website and often freelancing as a graphic designer. Learning
          JavaScript along the way, from thereon was the start of my interest
          towards Frontend Web Development and Computer Science. Now it has been
          3 years since I was hired as a Frontend Engineer in a decacorn company
          in Southeast Asia. <br />
          <br />
          It is my pleasure to introduce myself through a <s>document</s>{" "}
          website to you!
        </div>
        <div class={styles.buttonContainer}>
          <button>Visit my personal space</button>
          <button>Visit my projects</button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
