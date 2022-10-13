class Department {
  static country:string='Ethiopia';
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {
    console.log('with in a constructor',Department.country);
  }

  static createEmployee(name:string){
   return {name:name};
  }


  describe(this: Department) {
    console.log(`Department (${this.id}):${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}
class Accounting extends Department {
  private lastReport: string;
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }
  set mostRecentReport(value: string) {
    if (!value) throw new Error("Please pass in a valid value!");
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  addEmployee(name: string) {
    if (name === "Bahiru") return;
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReport() {
    console.log(this.reports);
  }
}
const employee1 = Department.createEmployee('Bahiru');
console.log(employee1,Department.country);

const it = new ITDepartment("d1", ["Bahir"]);
it.addEmployee("Bahiru");
it.addEmployee("Mulugeta");
it.describe();
it.name = "New Name";
it.printEmployeeInformation();
console.log(it);

const accounting = new Accounting("d2", []);
accounting.mostRecentReport='Another report';
accounting.addReport("something went wrong...");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Bahiru");
accounting.addEmployee("NewBahiru");
accounting.printReport();
accounting.printEmployeeInformation();
