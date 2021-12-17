const user = { userName: "Jordan", userId: 122445 };

const { userName, userId: Id } = user;

console.log(userName, Id); // what will this log?

const user2 = { ...user, userId: 1234 };

console.log(user2); //what will this log?
