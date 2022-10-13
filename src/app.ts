interface Named{
  readonly name: string;

}
interface Greetable extends Named{
  greet(phrase: string): void;
}
class Person implements Greetable {
  name: string;
  age=14;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase:string) {
    console.log(phrase + " " + this.name);

  }
}
let user1: Greetable;
user1 = new Person("Bahiru");
user1.greet("Heyy man");
console.log(user1);
