import { findInvoiceById } from './data/invoice.js';





/* promise.then((json) => {
    console.log(json);
    console.log('reaizando alguna tarea con demora', json);
}).catch((error) => {
    console.log(error);
}); */


findInvoiceById(3)
        .then(console.log)
        .catch(console.log);
