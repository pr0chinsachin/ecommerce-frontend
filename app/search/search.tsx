"use client";
import { Button } from "flowbite-react";
import { useState } from "react";
import Styles from "./search.module.css";

export default function Search() {
  const [selected, setSelected] = useState("");

  function handleChange(event: any) {
    console.log("Label", event.target.selectedOptions[0].label);
    console.log(event.target.value);
    setSelected(event.target.value);
  }

  return (
    <div>
      <div id={Styles.desktopView}>
        <form className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-6 gap-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Type
              </label>
              <select
                id="countries"
                value={selected}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Choose Property</option>
                <option value="R">Rent</option>
                <option value="P">Propery</option>
                <option value="H">House Buy</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Bathroom
              </label>
              <input
                type="number"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Bed
              </label>
              <input
                type="number"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Car Park
              </label>
              <input
                type="number"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Range
              </label>
              <select
                id="range"
                value={selected}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Choose Price Range</option>
                <option value="US">$1000 - $2000</option>
                <option value="CA">$2001 - $10000</option>
                <option value="FR">$10001 - $100000</option>
                <option value="DE">$100001 - $100000</option>
              </select>
            </div>
            <div>
              <Button className="mt-7">Go</Button>
            </div>
          </div>
        </form>
      </div>

      <div id={Styles.mobileView}>
        <form className="container mx-auto px-4 py-6">
          <div className="">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Type
              </label>
              <select
                id="countries"
                value={selected}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Choose Property</option>
                <option value="R">Rent</option>
                <option value="P">Propery</option>
                <option value="H">House Buy</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Bathroom
              </label>
              <input
                type="number"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Bed
              </label>
              <input
                type="number"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Car Park
              </label>
              <input
                type="number"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Range
              </label>
              <select
                id="range"
                value={selected}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Choose Price Range</option>
                <option value="US">$1000 - $2000</option>
                <option value="CA">$2001 - $10000</option>
                <option value="FR">$10001 - $100000</option>
                <option value="DE">$100001 - $100000</option>
              </select>
            </div>
            <div>
              <Button className="mt-7">Go</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
