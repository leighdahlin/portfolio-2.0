import React from 'react';
import Image from 'next/image';
import linkedinIcon from '../components/home/img/connect-linkedin.png';
import mailIcon from '../components/home/img/connect-mail.png';
import logo from './img/logo-dark.png';

export default function Footer() {
  return (
    <footer className="flex justify-center items-center gap-20 p-5">
      <Image
        src={linkedinIcon}
        height={30}
        width={30}
        alt="LinkenIn icon"
        className=""
      />
      <Image src={logo} height={40} width={40} alt="Logo" className="" />
      <Image
        src={mailIcon}
        height={35}
        width={35}
        alt="Mail icon"
        className=""
      />
    </footer>
  );
}
