const employees1 = new Employees();
const company1 = new Company(employees1);
const list1 = new List('#first_ol');

for (let i = 20; i > 0; ) {
    const newEmployee = EmployeesGenerator.getRandomEmployee();
    company1.hire(newEmployee) ? i-- : i;
    // if ID is not unique and .hire returns false - generate another employee
}

company1.processEmployees(value => list1.addItem(JSON.stringify(value)));
console.log(employees1.getAll());
console.log(company1.computeBudget());





