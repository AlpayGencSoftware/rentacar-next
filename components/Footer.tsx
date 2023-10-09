import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="justify-start items-start gap-6">
          <Image
            className="object-contain"
            src="/logo.svg"
            width={150}
            height={36}
            alt="logo"
          />
          <p className="text-base text-gray-700">
            Carsales 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <nav className="footer__links flex">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link mr-5">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500 hover:text-blue-500 hover:underline block"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>Carsales 2023
All rights reserved ©</p>
        <div className="footer__copyrighs-link">
          <Link
            href="/"
            className="text-gray-500 hover:text-blue-500 hover:underline mr-4"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="text-gray-500 hover:text-blue-500 hover:underline"
          >
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
