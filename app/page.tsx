"use client";
import Image from "next/image";
import Navbar from "./navbar/navbar";
import Header from "./header/header";
import Search from "./search/search";
import Products from "./product/product";
import LatestProducts from "./latestProduct/latestProduct";
import Dashboard from "./dashboard/dashboard";
import Footer from "./footer/footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Dashboard />
      <Products />
      <LatestProducts />
      <Footer />
    </>
  );
}
