const data = [
    {
        id: 1,
        brand: "BMW",
        model: "5 Series",
        year: 2009,
        img: "/assets/vehicles/bmw5series.jpg",
        category: null,
        price: 127850,
        stock: 1
      }, {
        id: 2,
        brand: "BMW",
        model: "Alpina B7",
        year: 2008,
        img: "/assets/vehicles/bmwalpinab7.jpg",
        category: null,
        price: 646833,
        stock: 1
      }, {
        id: 3,
        brand: "BMW",
        model: "645",
        year: 2004,
        img: "/assets/vehicles/bmw645.jpg",
        category: null,
        price: 109810,
        stock: 1
      }, {
        id: 4,
        brand: "Lincoln",
        model: "Navigator",
        year: 2002,
        img: "/assets/vehicles/lincolnnavigator.jpg",
        category: null,
        price: 630130,
        stock: 2
      }, {
        id: 5,
        brand: "Hyundai",
        model: "Elantra",
        year: 2013,
        img: "/assets/vehicles/hyundaielantra.jpg",
        category: null,
        price: 951880,
        stock: 5
      }, {
        id: 6,
        brand: "Oldsmobile",
        model: "Custom Cruiser",
        year: 1991,
        img: "/assets/vehicles/oldsmobilecustomcruiser.jpg",
        category: null,
        price: 780467,
        stock: 1
      }, {
        id: 7,
        brand: "Mazda",
        model: "B-Series Plus",
        year: 2000,
        img: "/assets/vehicles/mazdabseriesplus.jpg",
        category: null,
        price: 600725,
        stock: 4
      }, {
        id: 8,
        brand: "Mercedes-Benz",
        model: "300E",
        year: 1995,
        img: "/assets/vehicles/mercedesbenz300e.jpg",
        category: null,
        price: 640822,
        stock: 1
      }, {
        id: 9,
        brand: "Ford",
        model: "Fiesta ST",
        year: 2015,
        img: "/assets/vehicles/fordfiestast.jpg",
        category: null,
        price: 154180,
        stock: 2
      }, {
        id: 10,
        brand: "Buick",
        model: "Rainier",
        year: 2006,
        img: "/assets/vehicles/buickrainier.jpg",
        category: null,
        price: 817957,
        stock: 3
      }
]

// ---ASYNC---
export default function getItems(){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(data);
        }, 1500)
    })
}

export function getSingleItem(){
  return new Promise( (resolve, reject) => {
      setTimeout( () => {
          resolve(data[0]);
      }, 1500)
  })
}