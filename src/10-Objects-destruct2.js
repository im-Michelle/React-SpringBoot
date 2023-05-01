
const user = {
    username : 'Mike',
    email : 'test@com',
    age : 20,
    ranking : 9
};


/* const username = user.username;
const ranking = user.ranking;
const age = user.age; */

const details = (username, email) => {
    console.log(`El detalle del usuario ${username} con correo ${email}`);
}

details(user.username,user.email);
