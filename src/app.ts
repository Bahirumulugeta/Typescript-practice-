function merge<T extends object, U extends object>(name:T, objB:U){
  return Object.assign(name,objB);
}
const newObject=merge({name:'Bahiru'},{id:12});
console.log(newObject.name);

//keyof usage
function extractAndConvert<T extends object,U extends keyof T>(obj:T,key:U){
  return obj[key]; 
}
extractAndConvert({name:'Bahiru'},'name');