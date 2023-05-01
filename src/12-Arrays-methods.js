
const invoices = [
    {
        id : 1,
        name : 'Compras de oficina',
        client : {
            name : "John",
            lastName : "Doe",
        },
        items : [
            {
                producto : 'keyboard',
                price : 399,
                quantity : 2
            },
            {
                producto : 'mouse',
                price : 200,
                quantity : 1
            },
            {
                producto : 'paper',
                price : 100,
                quantity : 10
            }
        ]
    },
    {
        id : 2,
        name : 'Compras de computacion',
        client : {
            name : "Maria",
            lastName : "Doe",
        },
        items : [
            {
                producto : 'keyboard',
                price : 399,
                quantity : 2
            },
            {
                producto : 'screen 17',
                price : 800,
                quantity : 1
            },
            {
                producto : 'cpu',
                price : 1000,
                quantity : 1
            }
        ]
    },
    {
        id : 3,
        name : 'Compras de papeleria',
        client : {
            name : "Pepe",
            lastName : "Doe",
        },
        items : [
            {
                producto : 'pencil',
                price : 50,
                quantity : 1
            },
            {
                producto : 'paper',
                price : 100,
                quantity : 10
            }
        ]
    }  
];

const invoicesName = invoices.map( i => {
    return i.name;
});

console.log(invoices);
console.log(invoicesName);

const invoicesClient = invoices.map( i => {
    return i.client.name;
});

console.log(invoicesClient);

const invoicesFindById = invoices.find( i => i.client.name === 'Pepe');
console.log(invoicesFindById);


const invoicesFilter = invoices.filter( i => {
    return i.id > 1;
});
console.log(invoicesFilter);

const invoicesFilter2 = invoices.filter( i => {
    return i.items.includes(
        {
            producto : 'paper',
            price : 100,
            quantity : 10
        }
    );
});
console.log(invoicesFilter2);

const result = invoices.some(i => {
    return i.client.name === 'Pepe'
});
console.log(result);


console.log("Delete")
const invoicesDelete = invoices.filter( i => {
    return i.id != 2;
});
console.log(invoicesDelete);