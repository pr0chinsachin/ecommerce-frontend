"use client";
import React, { useState } from "react";
import Style from "./productDetails.module.css";

import { Card } from "flowbite-react";

export default function ProductDetails() {
  const [mainImage, setMainImage] = useState(
    "https://media.istockphoto.com/id/1326353127/photo/estate-agent-showround.jpg?s=1024x1024&w=is&k=20&c=v0blvR3sGc4OP3p6bGkGt9hEoTagGjyy0EIrEZuO07A="
  );

  const changeImage = (src: any) => {
    setMainImage(src);
  };

  return (
    <div className="container max-auto mt-10 mb-10">
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
      </Card>
    </div>
  );
}
