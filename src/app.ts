// function merge<T extends object, U extends object>(name: T, objB: U) {
//   return Object.assign(name, objB);
// }
// const newObject = merge({ name: "Bahiru" }, { id: 12 });
//  console.log(newObject);

// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return obj[key];
// }
// extractAndConvert({ name: "Bahiru" }, "name");

// class DataStorage<T> {
//   private data: T[] = [];
//   addItem(item: T) {
//     this.data.push(item);
//   }
//   removeItem(item: T) {
//     if (this.data.indexOf(item) === -1) return;
//     this.data.splice(this.data.indexOf(item), 1);
//   }
//   getItems() {
//     return [...this.data];
//   }
// }
// const textStorage = new DataStorage<string>();
// textStorage.addItem("Bahiru");
// textStorage.addItem("Mulugeta");
// textStorage.removeItem("Bahiru");
// console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number>();
// numberStorage.addItem(1);
// console.log(numberStorage.getItems());

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({ name: "Bahiru" });
// objectStorage.addItem({ id: 1 });

// console.log(objectStorage.getItems());

interface CourseGoal{
  title:string,
  description:string,
  completeUntil:Date
}
function createCourseGoal (title:string,description:string,date:Date):CourseGoal{
  let courseGoal: Partial<CourseGoal> ={};
  courseGoal.title= title;
  courseGoal.description= description;
  courseGoal.completeUntil= date;

  return courseGoal as CourseGoal;
}

