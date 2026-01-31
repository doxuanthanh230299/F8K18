abstract class Employee {
    private id: number;
    name: string;
    salary: number;
    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getSalary(): number {
        return this.salary;
    }

    setSalary(salary: number): void {
        if (salary <= 0) {
            throw new Error("Salary must be greater than 0");
        }
        this.salary = salary;
    }
    abstract calculateSalary(): number;
}

class Developer extends Employee {
    private overtimeHours: number;
    constructor(
        id: number,
        name: string,
        salary: number,
        overtimeHours: number
    ) {
        super(id, name, salary);
        this.overtimeHours = overtimeHours;
    }

    setSalary(salary: number): void {
        if (salary <= 0) {
            throw new Error("Salary must be greater than 0");
        }
        this.salary = salary + this.overtimeHours * 50000;
    }

    calculateSalary(): number {
        return this.salary + this.overtimeHours * 50000;
    }
}

class Manager extends Employee {
    private teamSize: number;
    constructor(
        id: number,
        name: string,
        salary: number,
        teamSize: number
    ) {
        super(id, name, salary);
        this.teamSize = teamSize;
    }

    setSalary(salary: number): void {
        if (salary <= 0) {
            throw new Error("Salary must be greater than 0");
        }
        this.salary = salary + this.teamSize * 200000;
    }

    calculateSalary(): number {
        return this.salary + this.teamSize * 200000;
    }
}

const developer = new Developer(1, 'Do Thanh', 1000, 5);
const manager = new Manager(2, 'Nguyen Van B', 5000, 4)
console.log(developer);
console.log(developer.calculateSalary()); 
console.log(manager);
console.log(manager.calculateSalary());



