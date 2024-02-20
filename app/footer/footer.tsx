"use client";
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/noavatar.png";

export default function FooterSection() {
  const [cDate, setcDate] = useState(new Date());

  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Image src={Logo} alt="Company Logo" width={75} height={75} />
          <FooterLinkGroup>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="ISM" />
        {cDate.getFullYear()}
      </div>
    </Footer>
  );
}
