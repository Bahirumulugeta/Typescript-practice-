function merge<T extends object, U extends object>(name:T, objB:U){
  return Object.assign(name,objB);
}
const newObject=merge({name:'Bahiru'},{id:12});
console.log(newObject.name);
