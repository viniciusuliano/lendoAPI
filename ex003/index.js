const products = [
    { name: 'Maça', price: 2.5 },
    { name: 'Coca cola', price: 8 },
    { name: 'Guarana', price: 5 },
    { name: 'Chocolate', price: 20 }
  ];

const produtos = products.filter((produto)=>{
    return produto.price < 8
})

console.log(produtos)