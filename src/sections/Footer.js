import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer style={{ marginTop: "auto" }}>
      <hr />

      <p className="text-center">
        <strong>
          incase of any issues, dont hesitate to contact us via:{" "}
          <i>0768793923</i>
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
        designed by{" "}
        <a
          style={{ textDecoration: "none" }}
          className="text-success"
          href="https://wa.me/254768793923"
        >
          contact developer
        </a>
      </p>
    </footer>
  );
}

export default Footer;
