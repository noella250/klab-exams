const item = [
    { name: "Bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 10 },
    { name: "Book", price: 5 },
    { name: "Phone", price: 500 },
    { name: "Computer", price: 1000 },
  ];

  let pris = [];

  item.forEach((Element) => {
    pris.push(Element.price);
  });
  pris.sort((a, b) => a - b);

  //   Object of cheapest product

  const cheapProduct = item.filter((e) => {
    return e.price === pris[0];
  });

  console.log(cheapProduct);
  //   Object of expensive product

  const expensiveProduct = item.filter((e) => {
    return e.price === pris[pris.length - 1];
  });
  console.log(expensiveProduct);
  const Remove10 = item.filter((e) => {
    return e.price !== 10;
  });

  function total(params) {
    let additon = 0;
    params.forEach((e) => {
      additon += e.price;
    });
    return additon;
  }

  //   3 Return the total of all pris of product

  let wholeproducts = total(item);

  console.log(wholeproducts);
  //   3 Return the total of all pris of product except price ten

  let totolallbutnotten= total(Remove10);

  console.log( totolallbutnotten);