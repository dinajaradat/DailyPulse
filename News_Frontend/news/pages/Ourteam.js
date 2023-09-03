import Head from "next/head";
import SmallHeader from "@/components/SmallHeader";
import { Parent } from "@/components/Parent";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}

export default function OurTeam() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
        />
      </Head>
      <Parent>
        <div
          className=" bg-bgLight text-white text-opacity-60 font-montserrat text-sm dark:bg-bgDark"
          style={{ minHeight: "70vh" }}
        >
          <section className="hero-section rounded mt-10 w-200">
            <div className="card-grid">
              <div className="card">
                <div
                  className="card__background"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`,
                  }}
                ></div>
                <div className="card__content">
                  <p className="card__category">Amjad Al-Sayyed</p>
                  <h3 className="card__heading">Full Stack Developer</h3>

                  <div className="card__social-media">
                    <a href="https://web.facebook.com/?_rdc=1&_rdr">
                      {" "}
                      <i className="fab fa-facebook-f"></i>{" "}
                    </a>
                    <i className="fab fa-twitter"></i>
                    <a href="">
                      {" "}
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  className="card__background"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)`,
                  }}
                ></div>
                <div className="card__content">
                  <p className="card__category">Dina Jaradat</p>
                  <h3 className="card__heading">Full Stack Developer</h3>

                  <div className="card__social-media">
                    <a href="https://web.facebook.com/?_rdc=1&_rdr">
                      {" "}
                      <i className="fab fa-facebook-f"></i>{" "}
                    </a>
                    <i className="fab fa-twitter"></i>
                    <a href="">
                      {" "}
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  className="card__background"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)`,
                  }}
                ></div>
                <div className="card__content">
                  <p className="card__category">Amer Alomari</p>
                  <h3 className="card__heading">Full Stack Developer</h3>

                  <div className="card__social-media">
                    <a href="https://web.facebook.com/?_rdc=1&_rdr">
                      {" "}
                      <i className="fab fa-facebook-f"></i>{" "}
                    </a>
                    <i className="fab fa-twitter"></i>
                    <a href="">
                      {" "}
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  className="card__background"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)`,
                  }}
                ></div>
                <div className="card__content">
                  <p className="card__category">Doha Khamaiseh</p>
                  <h3 className="card__heading">Full Stack Developer</h3>

                  <div className="card__social-media">
                    <a href="https://web.facebook.com/?_rdc=1&_rdr">
                      {" "}
                      <i className="fab fa-facebook-f"></i>{" "}
                    </a>
                    <i className="fab fa-twitter"></i>
                    <a href="https://www.linkedin.com/in/doha-khamaiseh-05a728254/">
                      {" "}
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div
                  className="card__background"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)`,
                  }}
                ></div>
                <div className="card__content">
                  <p className="card__category">Alaa Hmaidat</p>
                  <h3 className="card__heading">Full Stack Developer</h3>

                  <div className="card__social-media">
                    <a href="https://web.facebook.com/?_rdc=1&_rdr">
                      {" "}
                      <i className="fab fa-facebook-f"></i>{" "}
                    </a>
                    <i className="fab fa-twitter"></i>
                    <a href="">
                      {" "}
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Parent>
    </>
  );
}
