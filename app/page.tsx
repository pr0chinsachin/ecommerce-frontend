"use client";
import Image from "next/image";

import Header from "./header/header";
import Search from "./search/search";
import Products from "./product/product";
import LatestProducts from "./latestProduct/latestProduct";
import Dashboard from "./dashboard/dashboard";
export default function Home() {
  return (
    <>
      <Header />
      <Dashboard />
      <Products />
      <LatestProducts />
    </>
  );
}
