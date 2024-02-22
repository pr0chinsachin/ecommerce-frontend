"use client";
import React, { useState } from "react";
import Style from "./productDetails.module.css";
import { Badge } from "flowbite-react";
import { Card } from "flowbite-react";
import ProductDescription from "./productDescription/productDescription";
import Teams from "@/app/team/team";

export default function ProductDetails() {
  const [mainImage, setMainImage] = useState(
    "https://media.istockphoto.com/id/1326353127/photo/estate-agent-showround.jpg?s=1024x1024&w=is&k=20&c=v0blvR3sGc4OP3p6bGkGt9hEoTagGjyy0EIrEZuO07A="
  );

  const changeImage = (src: any) => {
    setMainImage(src);
  };

  const fetchDetaisla = {
    propertyName: "Amsterbam Broklene 21 East",
    propertyAddress: "Amsterdam, Netherlands",
    propertyPrice: "$1000000.00",
    propertyStatus: "For Sale",
  };

  return (
    <>
      <div className="container mx-auto mt-10 mb-10">
        <Card>
          <div className="flex flex-wrap gap-2">
            <Badge color="warning" size="sm">
              {fetchDetaisla.propertyStatus}
            </Badge>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h1 className="text-2xl">{fetchDetaisla.propertyName} </h1>
              <span className="text-xs text-gray-700 dark:text-gray-400">
                {fetchDetaisla.propertyAddress}
              </span>
            </div>
            <div>
              <h1 className="text-2xl float-right text-cyan-800 hover:text-red-500">
                {fetchDetaisla.propertyPrice}
              </h1>
            </div>
          </div>

          <hr />
        </Card>
      </div>
      <div className="container mx-auto mt-10 mb-10">
        <Card className="max-auto">
          <div>
            <div className="main_view">
              <img src={mainImage} alt="Main" />
            </div>
            <div className={Style.side_view}>
              <img
                src="https://media.istockphoto.com/id/1326353127/photo/estate-agent-showround.jpg?s=1024x1024&w=is&k=20&c=v0blvR3sGc4OP3p6bGkGt9hEoTagGjyy0EIrEZuO07A="
                onClick={() =>
                  changeImage(
                    "https://media.istockphoto.com/id/1326353127/photo/estate-agent-showround.jpg?s=1024x1024&w=is&k=20&c=v0blvR3sGc4OP3p6bGkGt9hEoTagGjyy0EIrEZuO07A="
                  )
                }
                alt="Thumbnail 1"
              />
              <img
                src="https://media.istockphoto.com/id/1367965991/photo/house-model-with-agent-and-customer-discussing-for-contract-to-buy-get-insurance-or-loan-real.jpg?s=1024x1024&w=is&k=20&c=uiTjelzEJoTOgwWTQwLmlcjyrNPR-zPn9JstoMPcSFA="
                onClick={() =>
                  changeImage(
                    "https://media.istockphoto.com/id/1367965991/photo/house-model-with-agent-and-customer-discussing-for-contract-to-buy-get-insurance-or-loan-real.jpg?s=1024x1024&w=is&k=20&c=uiTjelzEJoTOgwWTQwLmlcjyrNPR-zPn9JstoMPcSFA="
                  )
                }
                alt="Thumbnail 2"
              />
              <img
                src="https://media.istockphoto.com/id/1326353127/photo/estate-agent-showround.jpg?s=1024x1024&w=is&k=20&c=v0blvR3sGc4OP3p6bGkGt9hEoTagGjyy0EIrEZuO07A="
                onClick={() =>
                  changeImage(
                    "https://media.istockphoto.com/id/1326353127/photo/estate-agent-showround.jpg?s=1024x1024&w=is&k=20&c=v0blvR3sGc4OP3p6bGkGt9hEoTagGjyy0EIrEZuO07A="
                  )
                }
                alt="Thumbnail 3"
              />
              <img
                src="https://media.istockphoto.com/id/1367965991/photo/house-model-with-agent-and-customer-discussing-for-contract-to-buy-get-insurance-or-loan-real.jpg?s=1024x1024&w=is&k=20&c=uiTjelzEJoTOgwWTQwLmlcjyrNPR-zPn9JstoMPcSFA="
                onClick={() =>
                  changeImage(
                    "https://media.istockphoto.com/id/1367965991/photo/house-model-with-agent-and-customer-discussing-for-contract-to-buy-get-insurance-or-loan-real.jpg?s=1024x1024&w=is&k=20&c=uiTjelzEJoTOgwWTQwLmlcjyrNPR-zPn9JstoMPcSFA="
                  )
                }
                alt="Thumbnail 4"
              />
            </div>
          </div>
          <ProductDescription />
          <Teams />
        </Card>
      </div>
    </>
  );
}
