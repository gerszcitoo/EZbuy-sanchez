const data = [
  {
    id: 1,
    brand: "BMW",
    model: "5 Series",
    year: 2009,
    img: "/assets/vehicles/bmw5series.jpg",
    category: "Sedan",
    price: 10200,
    stock: 2,
  },
  {
    id: 2,
    brand: "BMW",
    model: "Alpina B7",
    year: 2008,
    img: "/assets/vehicles/bmwalpinab7.jpg",
    category: "Sedan",
    price: 40000,
    stock: 2,
  },
  {
    id: 3,
    brand: "BMW",
    model: "645",
    year: 2004,
    img: "/assets/vehicles/bmw645.jpg",
    category: "Coupe",
    price: 10600,
    stock: 2,
  },
  {
    id: 4,
    brand: "Lincoln",
    model: "Navigator",
    year: 2002,
    img: "/assets/vehicles/lincolnnavigator.jpg",
    category: "Camioneta",
    price: 6150,
    stock: 3,
  },
  {
    id: 5,
    brand: "Hyundai",
    model: "Elantra",
    year: 2013,
    img: "/assets/vehicles/hyundaielantra.jpg",
    category: "Compacto",
    price: 8240,
    stock: 7,
  },
  {
    id: 6,
    brand: "Oldsmobile",
    model: "Custom Cruiser",
    year: 1991,
    img: "/assets/vehicles/oldsmobilecustomcruiser.jpg",
    category: "Sedan",
    price: 19000,
    stock: 3,
  },
  {
    id: 7,
    brand: "Mazda",
    model: "B-Series Plus",
    year: 2000,
    img: "/assets/vehicles/mazdabseriesplus.jpg",
    category: "Camioneta",
    price: 6995,
    stock: 4,
  },
  {
    id: 8,
    brand: "Mercedes-Benz",
    model: "300E",
    year: 1995,
    img: "/assets/vehicles/mercedesbenz300e.jpg",
    category: "Sedan",
    price: 4950,
    stock: 3,
  },
  {
    id: 9,
    brand: "Ford",
    model: "Fiesta ST",
    year: 2015,
    img: "/assets/vehicles/fordfiestast.jpg",
    category: "Compacto",
    price: 15250,
    stock: 2,
  },
  {
    id: 10,
    brand: "Buick",
    model: "Rainier",
    year: 2006,
    img: "/assets/vehicles/buickrainier.jpg",
    category: "Camioneta",
    price: 7520,
    stock: 3,
  },
];

// ---ASYNC---
// obtener todos los items
export function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });
}

// filtrar items por categoria
export function getItemsByCategory(cat) {
  return new Promise((resolve, reject) => {
    let itemFind = data.filter((item) => {
      return item.category === cat;
    });
    setTimeout(() => {
      if (itemFind) resolve(itemFind);
      else reject(new Error("Item no encontrado"));
    }, 1500);
  });
}

// obtener solo un item
export function getSingleItem(idItem) {
  return new Promise((resolve, reject) => {
    let itemFind = data.find((item) => {
      return item.id === Number(idItem);
    });
    setTimeout(() => {
      if (itemFind) resolve(itemFind);
      else reject(new Error("Item no encontrado"));
    }, 1500);
  });
}

export async function createBuyOrder(orderData) {
  const date = new Date();
  const timestamp = date.getTime();
  const salt = crypto.getRandomValues(new Uint8Array(3));
  const key = `${timestamp}_${salt.join("")}`;
  return key;
}
