import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer style={{ marginTop: "auto" }}>
      <hr />

      <p className="text-center">
        <strong>
          Lets grab a coffee and discuss about your next big project. My inbox is always open whether you have a question or just want to say hi. <br/><br/> Lets get in touch :{" "}<br/><br/>
          Email : <i>devriz2030@gmail.com</i><br/>
          Contact : <i>0768793923</i><br/>

        </strong>
      </p>
      <p
        style={{
          textAlign: "center",
          color: "black",
          bottom: "0",
        }}
      >
        ©dev_riz {year}
        <br />
        Designed by{" "}
        <a
          style={{ textDecoration: "none", fontWeight:"bold" }}
          className="text-success"
          href="https://wa.me/254768793923"
        >
          Devriz with ❤️
        </a>
      </p>
    </footer>
  );
}

export default Footer;
