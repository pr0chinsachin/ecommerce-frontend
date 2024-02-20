import { Button } from "flowbite-react";
import Image from "next/image";
import CImage from "../../../public/image-1.jpeg";

export default function ProductCount() {
  return (
    <>
      <div className="container mx-auto px-4 h-100 mt-5 mb-5">
        <p className="mt-10 mb-10 text-4xl font-bold text-center">
          Our Services
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <figure className="relative transition-all duration-300 cursor-pointer filter hover:grayscale-0">
              <a href="#">
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={CImage}
                  alt="image description"
                  width={1000}
                  height={1000}
                />
              </a>
              <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <p>
                  Do you want to get notified when a new component is added to
                  Flowbite?
                </p>
                <Button>Click me</Button>
              </figcaption>
            </figure>
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={CImage}
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={CImage}
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={CImage}
              alt=""
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </>
  );
}
