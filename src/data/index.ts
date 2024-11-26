// import { label } from "framer-motion/client";
import { IformInput, IProduct, Icategory } from "../interfaces";
import { v4 as uuid } from "uuid";

export const ProductList: IProduct[] = [
  {
    id: uuid(),
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: "109.95",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: {
      name: "men's clothing",
      imgURL:
        "https://www.bolf.eu/eng_pl_Mens-Thick-Winter-Cotton-Jacket-Green-Bolf-1890A-88973_1.jpg",
    },
    imgURL: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    colors: ["#4B1F0B", "#0061F2", "#FF2A00"], // Added color codes
  },
  {
    id: uuid(),
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: "22.3",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, lightweight & soft fabric for breathable and comfortable wearing. Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: {
      name: "men's clothing",
      imgURL:
        "https://www.bolf.eu/eng_pl_Mens-Thick-Winter-Cotton-Jacket-Green-Bolf-1890A-88973_1.jpg",
    },
    imgURL:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    colors: ["#1E2328", "#0061F2", "#FF2A00"], // Added color codes
  },
  {
    id: uuid(),
    title: "Mens Cotton Jacket",
    price: "55.99",
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm-hearted love to Father, husband, or son in this thanksgiving or Christmas Day.",
    category: {
      name: "men's clothing",
      imgURL:
        "https://www.bolf.eu/eng_pl_Mens-Thick-Winter-Cotton-Jacket-Green-Bolf-1890A-88973_1.jpg",
    },
    imgURL: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    colors: ["#9B7B5B", "#2E1A47", "#A37F6C"], // Added color codes
  },
  {
    id: uuid(),
    title: "Mens Casual Slim Fit",
    price: "15.99",
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: {
      name: "men's clothing",
      imgURL:
        "https://www.bolf.eu/eng_pl_Mens-Thick-Winter-Cotton-Jacket-Green-Bolf-1890A-88973_1.jpg",
    },
    imgURL: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    colors: ["#353535", "#6C727F", "#1E2328"], // Added color codes
  },
  {
    id: uuid(),
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: "695",
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: {
      name: "jewelery",
      imgURL:
        "https://quickjewelryrepairs.com/wp-content/uploads/2020/09/Fashion_Jewelry_Necklace-2.jpg",
    },
    imgURL: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    colors: ["#B9A01E", "#A6A6A6", "#4B1F0B"], // Added color codes
  },
  {
    id: uuid(),
    title: "Solid Gold Petite Micropave ",
    price: "168",
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: {
      name: "jewelery",
      imgURL:
        "https://quickjewelryrepairs.com/wp-content/uploads/2020/09/Fashion_Jewelry_Necklace-2.jpg",
    },
    imgURL: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    colors: ["#D7D7D7", "#A39E9E", "#B4A3A3"], // Added color codes
  },
  {
    id: uuid(),
    title: "White Gold Plated Princess",
    price: "9.99",
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: {
      name: "jewelery",
      imgURL:
        "https://quickjewelryrepairs.com/wp-content/uploads/2020/09/Fashion_Jewelry_Necklace-2.jpg",
    },
    imgURL: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    colors: ["#B0B0B0", "#9F7B4D", "#F1E5D6"], // Added color codes
  },
  {
    id: uuid(),
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: "10.99",
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: {
      name: "jewelery",
      imgURL:
        "https://quickjewelryrepairs.com/wp-content/uploads/2020/09/Fashion_Jewelry_Necklace-2.jpg",
    },
    imgURL: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    colors: ["#B5736F", "#1E1E1E", "#6C6C6C"], // Added color codes
  },
  {
    id: uuid(),
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: "64",
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: {
      name: "electronics",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSyG5pltRD3oh2ziX5aoZnlBgEE0N1F1EIA&s",
    },
    imgURL: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    colors: ["#333333", "#888888", "#CCCCCC"], // Added color codes
  },
  {
    id: uuid(),
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: "109",
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: {
      name: "electronics",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSyG5pltRD3oh2ziX5aoZnlBgEE0N1F1EIA&s",
    },

    imgURL: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    colors: ["#4A4A4A", "#AA4A4A", "#BB7B7B"], // Added color codes
  },
];

export const formInputsLists: IformInput[] = [
  {
    id: "title",
    name: "title",
    label: "product title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "product description",
    type: "text",
  },

  {
    id: "image",
    name: "imgURL",
    label: "product imageUrl",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "product price",
    type: "number",
  },
];

export const colors: string[] = [
  "#FF5733", // A warm red-orange
  "#33FF57", // A bright green
  "#3357FF", // A vibrant blue
  "#F5A623", // A golden yellow
  "#9B59B6", // A purple
  "#1ABC9C", // A turquoise green
  "#E74C3C", // A bright red
  "#2ECC71", // A soft green
  "#F39C12", // A bright orange
  "#8E44AD", // A deep purple
];

export const categories: Icategory[] = [
  {
    id: uuid(),
    name: "men clothing",
    imgURL:
      "https://www.bolf.eu/eng_pl_Mens-Thick-Winter-Cotton-Jacket-Green-Bolf-1890A-88973_1.jpg",
  },
  {
    id: uuid(),
    name: "electronics",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSyG5pltRD3oh2ziX5aoZnlBgEE0N1F1EIA&s",
  },
  {
    id: uuid(),
    name: "jewelery",
    imgURL:
      "https://quickjewelryrepairs.com/wp-content/uploads/2020/09/Fashion_Jewelry_Necklace-2.jpg",
  },
  {
    id: uuid(),
    name: "jackets",
    imgURL:
      "data:image/jpeg;base64,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",
  },
];














// {
//   id: uuid(),
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: "109.95",
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: {
//     name: "men's clothing",
//     imgURL:
//       "https://www.bolf.eu/eng_pl_Mens-Thick-Winter-Cotton-Jacket-Green-Bolf-1890A-88973_1.jpg",
//   },
//   imgURL: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   colors: ["#4B1F0B", "#0061F2", "#FF2A00"], // Added color codes
// },
// {
//   id: uuid(),
//   title: "Mens Casual Premium Slim Fit T-Shirts ",
//   price: "22.3",
//   description:
//     "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, lightweight & soft fabric for breathable and comfortable wearing. Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//   category: {
//     name: "men's clothing",
//     imgURL:
//       "https://www.bolf.eu/eng_pl_Mens-Thick-Winter-Cotton-Jacket-Green-Bolf-1890A-88973_1.jpg",
//   },
//   imgURL:
//     "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//   colors: ["#1E2328", "#0061F2", "#FF2A00"], // Added color codes
// },
// {
//   id: uuid(),
//   title: "Mens Cotton Jacket",
//   price: "55.99",
//   description:
//     "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm-hearted love to Father, husband, or son in this thanksgiving or Christmas Day.",
//   category: {
//     name: "men's clothing",
//     imgURL:
//       "https://www.bolf.eu/eng_pl_Mens-Thick-Winter-Cotton-Jacket-Green-Bolf-1890A-88973_1.jpg",
//   },
//   imgURL: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//   colors: ["#9B7B5B", "#2E1A47", "#A37F6C"], // Added color codes
// },
// {
//   id: uuid(),
//   title: "Mens Casual Slim Fit",
//   price: "15.99",
//   description:
//     "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//   category: {
//     name: "men's clothing",
//     imgURL:
//       "https://www.bolf.eu/eng_pl_Mens-Thick-Winter-Cotton-Jacket-Green-Bolf-1890A-88973_1.jpg",
//   },
//   imgURL: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//   colors: ["#353535", "#6C727F", "#1E2328"], // Added color codes
// },