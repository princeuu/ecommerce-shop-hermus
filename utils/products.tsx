//I am changing the image links from firebase to amazon, firebase has issues with these direct links. Please remember to add the amazon link(that will show up at the error) instead of firebase at the cofig for it to work out.

export const products = [
  {
    id: "porsche",
    name: "Porsche 911",
    description:
      "The Porsche 911 is a timeless icon of automotive engineering, blending exhilarating performance, cutting-edge technology, and unmatched elegance. With its iconic design and precision handling, the 911 delivers a driving experience like no other, whether on the open road or the racetrack.",
    price: 154955,
    brand: "Porsche",
    category: "Car",
    inStock: true,
    horsepower: 473,
    zeroToSixty: 3.2,
    topSpeed: 193,
    images: [
      {
        name: "Porsche 911",
        color: "911",
        colorCode: "#D50000",
        image: "/911.jpg",
        description:
          "The Porsche 911 is a timeless icon of automotive engineering, blending exhilarating performance, cutting-edge technology, and unmatched elegance.",
        horsepower: 473,
        zeroToSixty: 3.2,
        topSpeed: 193,
      },
      {
        name: "Porsche 718",
        color: "718",
        colorCode: "#00356B",
        image: "/718.jpg",
        description:
          "The Porsche 718 is a tribute to the racing legends of the past, combining lightweight design and powerful engines for an exhilarating driving experience.",
        horsepower: 394,
        zeroToSixty: 4.3,
        topSpeed: 182,
      },
      {
        name: "Porsche Panamera",
        color: "Panamera",
        colorCode: "#000000",
        image: "/panamera.jpg",
        description:
          "The Porsche Panamera redefines luxury and performance in a four-door coupe. With its cutting-edge technology and powerful engines, it offers a perfect blend of comfort and dynamic driving.",
        horsepower: 620,
        zeroToSixty: 3.1,
        topSpeed: 196,
      },
    ],
  },
  {
    id: "lamborghini",
    name: "Lamborghini Urus",
    description:
      "The Lamborghini Urus combines luxury and sportiness in an SUV format, offering unmatched performance and cutting-edge design.",
    price: 275000,
    brand: "Lamborghini",
    category: "Car",
    inStock: true,
    horsepower: 641,
    zeroToSixty: 3.6,
    topSpeed: 190,
    images: [
      {
        name: "Lamborghini Urus",
        color: "Urus",
        colorCode: "#000000",
        image: "/urus.jpg",
        description:
          "The Lamborghini Urus combines luxury and sportiness in an SUV format, offering unmatched performance and cutting-edge design.",
        horsepower: 641,
        zeroToSixty: 3.6,
        topSpeed: 190,
      },
    ],
  },
  {
    id: "ferrari",
    name: "Ferrari LaFerrari",
    description:
      "The Ferrari LaFerrari is a masterpiece of engineering, combining hybrid technology with breathtaking performance.",
    price: 3286875,
    brand: "Ferrari",
    category: "Car",
    inStock: true,
    horsepower: 950,
    zeroToSixty: 2.6,
    topSpeed: 217,
    images: [
      {
        name: "Ferrari LaFerrari",
        color: "LaFerrari",
        colorCode: "#000000",
        image: "/LaFerrari.jpg",
        description:
          "The Ferrari LaFerrari is a masterpiece of engineering, combining hybrid technology with breathtaking performance.",
        horsepower: 950,
        zeroToSixty: 2.6,
        topSpeed: 217,
      },
      {
        name: "Ferrari 812 Superfast",
        color: "812 Superfast",
        colorCode: "#FF0000",
        image:
          "https://m.media-amazon.com/images/I/61thdjmfHcL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        description:
          "The Ferrari 812 Superfast is a testament to the brand's dedication to high-performance grand touring cars.",
        horsepower: 789,
        zeroToSixty: 2.8,
        topSpeed: 211,
      },
    ],
  },
  {
    id: "mercedes-benz",
    name: "Mercedes-Benz GT63",
    description:
      "The Mercedes-Benz GT63 combines luxury and power in a four-door coupe, delivering thrilling performance with elegance.",
    price: 198110,
    brand: "Mercedes-Benz",
    category: "Car",
    inStock: true,
    horsepower: 630,
    zeroToSixty: 3.1,
    topSpeed: 196,
    images: [
      {
        name: "Mercedes-Benz GT63",
        color: "GT63",
        colorCode: "#383838",
        image: "/gt63.jpg",
        description:
          "The Mercedes-Benz GT63 combines luxury and power in a four-door coupe, delivering thrilling performance with elegance.",
        horsepower: 630,
        zeroToSixty: 3.1,
        topSpeed: 196,
      },
    ],
  },
  {
    id: "audi",
    name: "Audi R8",
    description:
      "The Audi R8 is a high-performance sports car that combines everyday usability with exhilarating performance.",
    price: 171000,
    brand: "Audi",
    category: "Car",
    inStock: true,
    horsepower: 562,
    zeroToSixty: 3.4,
    topSpeed: 201,
    images: [
      {
        name: "Audi R8",
        color: "R8",
        colorCode: "#000000",
        image: "/r8.jpg",
        description:
          "The Audi R8 is a high-performance sports car that combines everyday usability with exhilarating performance.",
        horsepower: 562,
        zeroToSixty: 3.4,
        topSpeed: 201,
      },
      {
        name: "Audi RS e-tron GT",
        color: "Silver",
        colorCode: "#C0C0C0",
        image:
          "https://m.media-amazon.com/images/I/71zbWSRMaYL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        description:
          "The Audi RS e-tron GT is a fully electric performance sedan, showcasing the future of high-speed luxury.",
        horsepower: 637,
        zeroToSixty: 3.1,
        topSpeed: 155,
      },
    ],
  },
];
