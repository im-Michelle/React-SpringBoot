
const promise = fetch('https://jsonplaceholder.typicode.com/users');


/* promise.then(response => {
    // console.log(response);
    response.json().then(data => {
        console.log(data);
    })
});
 */


/* promise.then(response => {
    return response.json();
}) */

promise
        .then(response => response.json())
        .then(data => console.log(data));

console.log('Hola que tal!');