console.log('hello world');
const add = (num, num2) => {};
// we don't add notPublic to the exports since we want it to be a private or "local" function
const noPublic = () => {};
//we exports the modules with an object because they are more thatn one.
module.exports = { add, thing() {}, value: 1 };
//but when its just one thing we use
// module.exports = add
