import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark-blue flex justify-center items-center gap-20 p-5">
      <a href="https://www.linkedin.com/in/leighdahlin/" target="_blanks">
        <img
          src="images/footer-linkedin.png"
          height={25}
          width={25}
          alt="LinkenIn icon"
        />
      </a>
      <a href="https://leighdahlin.com">
        <img
          src="images/logo-light.png"
          height={40}
          width={40}
          alt="Logo"
          className=""
        />
      </a>
      <a href="mailto:leigh@leighdahlin.com">
        <img
          src="images/footer-mail.png"
          height={30}
          width={30}
          alt="Mail icon"
          className=""
        />
      </a>
    </footer>
  );
}
