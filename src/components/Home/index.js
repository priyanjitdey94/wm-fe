import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button, Col, Row } from "antd";
import { HeartFilled, TwitterCircleFilled, FacebookFilled } from "@ant-design/icons";

import styles from "../../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>WiredMetrics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
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

        {/* Cards Section */}
        <div className={styles["cards-section"]}>
          <div className="container-1200">
            <Row type="flex" gutter={[80, 80]}>
              <Col xs={24} md={12} lg={8}>
                <div className={styles.card}>
                  <div className={styles["card-img"]}>
                    <Image
                      src="/assets/images/easy_integration.png"
                      alt="Easy integration"
                      width={202}
                      height={170}
                    />
                  </div>
                  <div className={styles["card-title"]}>Easy Integration</div>
                  <div className={styles["card-description"]}>
                    Integrate all your data sources seamlessly and tie all
                    your data from different sources into a centralized platform.
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} lg={8}>
                <div className={styles.card}>
                  <div className={styles["card-img"]}>
                    <Image
                      src="/assets/images/metric_builder.png"
                      alt="Metric Builder"
                      width={191}
                      height={122}
                    />
                  </div>
                  <div className={styles["card-title"]}>Metric Builder</div>
                  <div className={styles["card-description"]}>
                    Generate custom metrics for easy observability and monitoring impacting your users.
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} lg={8}>
                <div className={styles.card}>
                  <div className={styles["card-img"]}>
                    <Image
                      src="/assets/images/continuous_monitoring.png"
                      alt="Metric Builder"
                      width={180}
                      height={150}
                    />
                  </div>
                  <div className={styles["card-title"]}>Continuous Monitoring</div>
                  <div className={styles["card-description"]}>
                    Watch critical business & product metrics into a single dashboard continually.
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} lg={8}>
                <div className={styles.card}>
                  <div className={styles["card-img"]}>
                    <Image
                      src="/assets/images/root_cause_analysis.png"
                      alt="Metric Builder"
                      width={158}
                      height={150}
                    />
                  </div>
                  <div className={styles["card-title"]}>Root Cause Analysis</div>
                  <div className={styles["card-description"]}>
                    Uncover causes for incidents through metric relationship builder & fix them proactively.
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} lg={8}>
                <div className={styles.card}>
                  <div className={styles["card-img"]}>
                    <Image
                      src="/assets/images/smart_insights.png"
                      alt="Metric Builder"
                      width={208}
                      height={129}
                    />
                  </div>
                  <div className={styles["card-title"]}>24/7 Smart Insights</div>
                  <div className={styles["card-description"]}>
                    Use the power of AI to detect trends & stay ahead in business performance issues.
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} lg={8}>
                <div className={styles.card}>
                  <div className={styles["card-img"]}>
                    <Image
                      src="/assets/images/instant_notifications.png"
                      alt="Metric Builder"
                      width={207}
                      height={159}
                    />
                  </div>
                  <div className={styles["card-title"]}>Instant Notifications</div>
                  <div className={styles["card-description"]}>
                    Super quick integration with tools like Slack, Pagerduty, Email or Webhook and get near real time notifications.
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className="container-1200" style={{ transform: "rotate(-180deg)" }}>
          <div className={styles["footer-content"]}>
            <Row type="flex" align="middle">
              <Col xs={24} md={6}>
                <Link href="/">
                  Blog
                </Link>
              </Col>
              <Col xs={24} md={6}>
                <Link href="/">
                  Privacy Policy
                </Link>
              </Col>
              <Col xs={24} md={6}>
                <Link href="/">
                  Contact Us
                </Link>
              </Col>
              <Col xs={24} md={6}>
                <div style={{ textAlign: "right" }}>
                  <Link href="/">
                    <FacebookFilled
                      className={styles["social-media-icon"]}
                      style={{
                        color: "#3B5998",
                        marginRight: 20
                      }}
                    />
                  </Link>
                  <Link href="/">
                    <TwitterCircleFilled
                      className={styles["social-media-icon"]}
                      style={{
                        color: "#55ACEE"
                      }}
                    />
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
          <div className={styles["footer-copyright"]}>
            <div>© 2021. Wired Metrics. All rights reserved</div>
            <div>Made with  <HeartFilled style={{ color: "#D13852" }} />   in India</div>
          </div>
        </div>
      </footer>
    </div>
  )
};

export default Home;
