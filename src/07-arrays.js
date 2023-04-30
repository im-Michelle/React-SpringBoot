

const products = ['mesa', 'silla', 'notebook', 'teclado'];

products.push('pantalla lcd', 'sony tv');

console.log(products);

// foreach
products.forEach(product =>console.log(product));

// forof
for (const product of products) {
    console.log(product);
}

// fori
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log(product);
}


console.log('Imprimir elementos');
console.log(products[4]);
console.log(products[0]);