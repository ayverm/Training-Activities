class Employee{
    constructor(id,name,department,salary)
    {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    displayDetails()
    {
        console.log(`Id : ${this.id}`);
        console.log(`Name : : ${this.name}`);
        console.log(`Department : ${this.department}`);
        console.log(`Salary : ${this.salary}`);
    }
}

const em1 = new Employee(1,"Alex","Digital",50000);
const em2 = new Employee(2,"John","CSE",60000);
em1.displayDetails();
em2.displayDetails();