console.log('hello world');
const add = (num, num2) => {};
// we don't add notPublic to the exports since we want it to be a private or "local" function
const noPublic = () => {};
module.exports = { add, thing() {}, value: 1 };
