// Ex1
interface PartTimeI {
    id: number;
    name: string;
    salary: number;
    hoursWorked: number;
}

const partTime: PartTimeI = {
    id: 2,
    name: "Binh",
    salary: 20,
    hoursWorked: 40,
};

const partTime2: PartTimeI = {
    ...partTime,
    hoursWorked: 45,
};

// Ex2
interface Employee {
    id: number;
    name: string;
    salary: number;
    getSalary(): number;
}

class FullTimeEmployee implements Employee {
    id!: number;
    name!: string;
    salary!: number;
    getSalary(): number {
        return this.salary
    }
}

class PartTimeEmployee implements Employee {
    id!: number;
    name!: string;
    salary!: number;
    hoursWorked!: number
    getSalary(): number {
        return this.salary * this.hoursWorked
    }
}

const calculateTotalSalary = (employees: Employee[]): number => {
    let total = 0
    employees.map(employee => {
        total += employee.getSalary()
    })
    return total
}

const fullTimeEmployee = new FullTimeEmployee()
fullTimeEmployee.id = 1
fullTimeEmployee.name = 'Nguyen Van A'
fullTimeEmployee.salary = 1000
fullTimeEmployee.getSalary()

const partTimeEmployee = new PartTimeEmployee()
partTimeEmployee.id = 2
partTimeEmployee.name = 'Nguyen Van B'
partTimeEmployee.hoursWorked = 4
partTimeEmployee.salary = 500
partTimeEmployee.getSalary()

const employees: Employee[] = [fullTimeEmployee, partTimeEmployee]
console.log(`Total Salary Employees: ${calculateTotalSalary(employees)}`)