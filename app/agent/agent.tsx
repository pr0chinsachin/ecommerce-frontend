import { Card, Button } from "flowbite-react";
import Image from "next/image";

const agentDetails = [
  {
    id: 1,
    name: "Sachin Maharjan",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    designation: "Sales Director",
  },
  {
    id: 2,
    name: "Ram Maharjan",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Front of men's Basic Tee in black.",
    designation: "Sales Director",
  },
  {
    id: 3,
    name: "John Marothan",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    designation: "Managing Director",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    designation: "Managing Director",
  },
  // More products...
];

export default function Agent() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl text-center font-bold">Meet Our Team</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {agentDetails.map((agent) => (
            <div key={agent.id} className="group relative">
              <Card className="max-auto">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src={agent.imageSrc}
                    alt={agent.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={agent.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {agent.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {agent.designation}
                    </p>
                  </div>
                  {/* <p className="text-sm font-medium text-gray-900">
                    {agent.price}
                  </p> */}
                  <Button>View</Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
