import Head from "next/head";
import Image from "next/image";
import { Button } from "antd";
import styles from "../../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>WiredMetrics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles["hero-container"]}>
          <div className="container-1200">
            <header className={styles.header}>
              <Image
                src="/assets/images/wm_logo.png"
                alt="Company Logo"
                width={175}
                height={60}
              />
            </header>
            <div className={styles["hero-title"]}>
              Get a move on user behaviour insights
            </div>
            <div className={styles["hero-subtitle"]}>
              <span className={styles["hero-subtitle-highlight"]}>Converge</span> your favorite product metrics on a single dashboard.
              Use the power of AI to track & turn every business incident into an opportunity
              to maximise revenue.
            </div>
            <div className={styles["hero-btn-container"]}>
              <Button
                type="primary"
                className={styles["hero-btn"]}
              >
                Get Early Access
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
};

export default Home;
