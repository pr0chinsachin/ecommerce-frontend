import { Card, Button } from "flowbite-react";
import Image from "next/image";
import carIcon from "../../public/car.svg";
import Bathroom from "../../public/bathtub-bold-bathroom.svg";
import Bedroom from "../../public/bed-bedroom-alt.svg";
import ProductImage from "../../public/image-card-01.jpeg";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    bed: "2",
    bath: "2",
    carParking: "2",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    bed: "2",
    bath: "1",
    carParking: "1",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    bed: "1",
    bath: "1",
    carParking: "1",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    bed: "1",
    bath: "2",
    carParking: "1",
  },
  {
    id: 5,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    bed: "2",
    bath: "2",
    carParking: "2",
  },
  {
    id: 6,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    bed: "2",
    bath: "2",
    carParking: "2",
  },
  {
    id: 7,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    bed: "3",
    bath: "3",
    carParking: "2",
  },
  {
    id: 8,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    bed: "3",
    bath: "3",
    carParking: "3",
  },
  // Mor  e products...
];

export default function Products() {
  return (
    <div className="bg-white">
      <div className="mx-auto container">
        <h2 className="text-4xl text-center font-bold mt-10 mb-10">
          Most Featured Product
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <Card>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    width={1000}
                    height={1000}
                  />
                </div>
                <h3 className="text-sm text-gray-700">{product.name}</h3>
                <div className="text-lg font-medium text-gray-900">
                  <div className="grid grid-cols-2 gap-4">
                    <div>{product.price}</div>
                    <div className="mt-1">
                      <Button>View</Button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-2">
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <Image
                              src={carIcon}
                              alt="My SVG"
                              width={20}
                              height={20}
                            />
                          </td>
                          <td className="pl-2">{product.carParking}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <Image
                              src={Bedroom}
                              alt="My SVG"
                              width={20}
                              height={20}
                            />
                          </td>
                          <td className="pl-2">{product.bed}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <Image
                              src={Bathroom}
                              alt="My SVG"
                              width={20}
                              height={20}
                            />
                          </td>
                          <td className="pl-2">{product.bath}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
