//import { Fragment } from "react";
//import { Disclosure, Menu, Transition } from "@headlessui/react";
//import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../public/noavatar.png";
import Image from "next/image";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

// const user = {
//   name: "Tom Cook",
//   email: "tom@example.com",
//   imageUrl:
//     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// };
// const navigation = [
//   { name: "Dashboard", href: "#", current: true },
//   { name: "Team", href: "#", current: false },
//   { name: "Projects", href: "#", current: false },
//   { name: "Calendar", href: "#", current: false },
//   { name: "Reports", href: "#", current: false },
// ];
// const userNavigation = [
//   { name: "Your Profile", href: "#" },
//   { name: "Settings", href: "#" },
//   { name: "Sign out", href: "#" },
// ];

// function classNames(...classes: any[]) {
//   return classes.filter(Boolean).join(" ");
// }

export default function NavbarItem() {
  return (
    <>
      <Navbar fluid rounded className="bg-cyan-950 text-slate-50">
        <NavbarBrand href="">
          <Image
            src={Logo}
            className="mr-3 h-6 sm:h-9"
            alt=""
            width={50}
            height={75}
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            ISM Product
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="/" className="text-slate-50" active>
            Home
          </NavbarLink>
          <NavbarLink className="text-slate-50" href="#">
            <Dropdown arrowIcon={true} inline label="Services">
              <DropdownItem>Sales</DropdownItem>
              <DropdownItem>Rent</DropdownItem>
              <DropdownItem>Earnings</DropdownItem>
              <DropdownDivider />
              <DropdownItem>Buildings</DropdownItem>
            </Dropdown>
          </NavbarLink>
          <NavbarLink className="text-slate-50" href="/agent">
            Agent
          </NavbarLink>
          <NavbarLink className="text-slate-50" href="#">
            About Us
          </NavbarLink>
          <NavbarLink className="text-slate-50" href="/contact">
            Contact
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}
