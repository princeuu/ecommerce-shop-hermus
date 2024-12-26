//I am changing the image links from firebase to amazon, firebase has issues with these direct links. Please remember to add the amazon link(that will show up at the error) instead of firebase at the cofig for it to work out.

export const products = [
  {
    id: "porsche",
    name: "Porsche 911",
    description: "Short description",
    price: 154955,
    brand: "porsche",
    category: "Car",
    inStock: true,
    images: [
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: "/911.jpg",
      },
      {
        color: "Gray",
        colorCode: "#808080",
        image: "/911.jpg",
      },
    ],
    reviews: [],
  },
  {
    id: "lamborghini",
    name: "Lamborghini Urus",
    description:
      "PERFECT STROKE KEYS - Spherically-dished keys match the shape of your fingertips, offering satisfying feedback with every tap\nCOMFORT AND STABILITY - Type with confidence on a keyboard crafted for comfort, stability, and precision",
    price: 275000,
    brand: "lamborghini",
    category: "Car",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image:
          "/urus.jpg",
      },
    ],
  },
  {
    id: "ferrari",
    name: "Ferrari LaFerrari",
    description:
      'The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day E~Shop Renewed Guarantee.\n- This pre-owned product has been professionally inspected, tested and cleaned by Amazon qualified vendors. It is not certified by Apple.\n- This product is in "Excellent condition". The screen and body show no signs of cosmetic damage visible from 12 inches away.\n- This product will have a battery that exceeds 80% capacity relative to new.\n- Accessories may not be original, but will be compatible and fully functional. Product may come in generic box.\n- Product will come with a SIM removal tool, a charger and a charging cable. Headphone and SIM card are not included.\n- This product is eligible for a replacement or refund within 90-day of receipt if it does not work as expected.\n- Refurbished phones are not guaranteed to be waterproof.',
    price: 40,
    brand: "Ferrari",
    category: "Car",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "/LaFerrari.jpg",
      },
      {
        color: "Blue",
        colorCode: " #0000FF",
        image: "https://m.media-amazon.com/images/I/713Om9vCHUL._AC_SX679_.jpg",
      },
      {
        color: "Red",
        colorCode: "#FF0000",
        image:
          "https://m.media-amazon.com/images/I/61thdjmfHcL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      },
    ],
  },
  {
    id: "mercedes-benz",
    name: "Mercedes-AMG GT 63",
    description:
      "Cross computer control: Game changing capacity to navigate seamlessly on 3 computers, and copy paste text, images, and files from 1 to the other using Logitech flow\nDual connectivity: Use with upto 3 Windows or Mac computers via included Unifying receiver or Bluetooth Smart wireless technology. Gesture button- Yes",
    price: 198110,
    brand: "Mercedes-Benz",
    category: "Car",
    inStock: true,
    images: [
      {
        color: "Graphite",
        colorCode: " #383838",
        image:
          "/gt63.jpg",
      },
    ],
  },
  {
    id: "audi",
    name: 'Audi R8',
    description:
      'Bluetooth Call and Message Reminder: The smart watch is equipped with HD speaker, after connecting to your phone via Bluetooth, you can directly use the smartwatches to answer or make calls, read messages, store contacts, view call history. The smartwatch can set up more message notifications in "GloryFit" APP. You will never miss any calls and messages during meetings, workout and riding.',
    price: 171000,
    brand: "Audi",
    category: "Car",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image:
          "/r8.jpg",
      },
      {
        color: "Silver",
        colorCode: "#C0C0C0",
        image:
          "https://m.media-amazon.com/images/I/71zbWSRMaYL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      },
    ],
    
  },
];
