const items = 
[ { name: 'Bike', price: 100 }, 
{ name: 'TV', price: 200 }, 
{ name: 'Album', price: 10 }, 
{ name: 'Book', price: 5 }, 
{ name: 'Phone', price: 500 },
{ name: 'Computer', price: 1000 }, ] 
  const foundItem = Boolean(items.length) && items.filter(item => item.price === 10)
   console.log(foundItem)