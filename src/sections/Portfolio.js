import React from "react";
import mpesa_docs from "../images/docsImage.png";
import etiketi from "../images/etiketi.png";
import lipia from "../images/lipiaImage.png";
import pdf from "../images/PDF.png";
import apiwap from "../images/apiwapLogo.png"
import kreativestores from "../images/kreativestoreLogo.png"
function Portfolio() {
  return (
    <div>
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Notable projects</h2>
            <p>
              Actions speak louder than words. Using the listed skills, here are
              some of the projects i have build.
            </p>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box iconbox-orange">
                <div style={{ overflow: "hidden" }}>
                  <img
                    src={mpesa_docs}
                    alt="daraja docs"
                    className="img-fluid w-100"
                  />
                </div>
                <h4>
                  <a href="#">M-PESA daraja docs </a>
                </h4>
                <p>
                  Simplified unofficial step-by-step guide to help you easily
                  integrate with M-Pesa's secure payment gateway and streamline
                  your online payment process.
                </p>
                <a
                  href="https://mpesa-docs.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="btn"
                    style={{
                      marginTop: 15,
                      backgroundColor: "#34b7a7",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    View Live Site
                  </button>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box iconbox-orange">
                <div style={{ overflow: "hidden" }}>
                  <img
                    src={apiwap}
                    alt="apiwap"
                    className="img-fluid w-100"
                  />
                </div>
                <h4>
                  <a href="#">Apiwap</a>
                </h4>
                <p>
                  Apiwap is a platform that provides whatsapp automation services. Provides apis to programically send and receive whatsapp messages
                </p>
                <a
                  href="https://apiwap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="btn"
                    style={{
                      marginTop: 15,
                      backgroundColor: "#34b7a7",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    View Live Site
                  </button>
                </a>
              </div>
            </div>


            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box iconbox-orange">
                <div style={{ overflow: "hidden" }}>
                  <img
                    src={kreativestores}
                    alt="apiwap"
                    className="img-fluid w-100"
                  />
                </div>
                <h4>
                  <a href="#">Kreativestores</a>
                </h4>
                <p>
                  Kreative stores is a platform for content creators to diversify their revenue streams. With kreativestores, a content creator can create an online store, upload and sell digital products, monetize whatsapp groups as well as manage thier one on one sessions.
                </p>
                <a
                  href="https://kreativestores.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="btn"
                    style={{
                      marginTop: 15,
                      backgroundColor: "#34b7a7",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    View Live Site
                  </button>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box iconbox-orange">
                <div style={{ overflow: "hidden" }}>
                  <img src={pdf} alt="pdf store" className="img-fluid w-100" />
                </div>
                <h4>
                  <a href="#">Ebook Store Kenya</a>
                </h4>
                <p>
                  An online ebook selling site. instant payment with mpesa api
                  and pdf ebook delivery instantly via automated whatsapp
                  intergrations.
                </p>
                <a
                  href="https://kreativestore.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="btn"
                    style={{
                      marginTop: 15,
                      backgroundColor: "#34b7a7",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    View Live Site
                  </button>
                </a>
              </div>
            </div>
           
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box iconbox-orange">
                <div style={{ overflow: "hidden" }}>
                  <img
                    src={lipia}
                    alt="lipia online"
                    className="img-fluid w-100"
                  />
                </div>
                <h4>
                  <a href="#">Lipia-Online</a>
                </h4>
                <p>
                  LIPIA PAY gives you the platform to seamlessly collect
                  payments on your website via our DEVELOPER API ,Or get paid
                  instantly to your bank account, till or paybill using our
                  PAYMENT LINKS. Quick and Easy.
                </p>
                <a
                  href="https://lipia-online.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="btn"
                    style={{
                      marginTop: 15,
                      backgroundColor: "#34b7a7",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    View Live Site
                  </button>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box iconbox-orange">
                <div style={{ overflow: "hidden" }}>
                  <img
                    src={etiketi}
                    alt="daraja docs"
                    className="img-fluid w-100"
                  />
                </div>
                <h4>
                  <a href="#">E-tiketi</a>
                </h4>
                <p>
                  E-tiketi enables you to manage and sell your events tickets
                  online. Integrated with online payment tools, You can easily
                  post your events and people can seamlessly book for the with
                  just a click of a button
                </p>
                <a
                  href="https://e-tiketi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="btn"
                    style={{
                      marginTop: 15,
                      backgroundColor: "#34b7a7",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    View Live Site
                  </button>
                </a>
              </div>
            </div>
            {/* <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box iconbox-orange">
                <div className="icon">
                  <svg
                    width={100}
                    height={100}
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="none"
                      strokeWidth={0}
                      fill="#f5f5f5"
                      d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                    />
                  </svg>
                  <i className="bx bx-file" />
                </div>
                <h4>
                  <a href>BILLER|| bill management</a>
                </h4>
                <p>
                  with use of mpesa api, you can now save your bills and pay
                  them without having to remember the payment details.
                </p>
                <a href="https://biller-ke.vercel.app" target="blank">
                  <button
                    className="btn "
                    style={{
                      marginTop: 15,
                      backgroundColor: "#34b7a7",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    view live site
                  </button>
                </a>
              </div>
            </div> */}
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box iconbox-orange">
                <div className="icon">
                  <svg
                    width={100}
                    height={100}
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="none"
                      strokeWidth={0}
                      fill="#f5f5f5"
                      d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                    />
                  </svg>
                  <i className="bx bx-file" />
                </div>
                <h4>
                  <a href>BILLER MOBILE APP</a>
                </h4>
                <p>
                  A flutter made android app to help you effieciently manage and
                  pay your Bills.
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.devriz.biller"
                  target="_blank"
                >
                  <button
                    className="btn "
                    style={{
                      marginTop: 8,
                      backgroundColor: "#34b7a7",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    Get It On Playstore
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
