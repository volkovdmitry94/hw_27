class Company {
    constructor(employees) {
        this.employees = employees;
    }

    hire = function(employee) {
        return this.employees.add(employee);
    }

    fire = function(id) {
        return this.employees.remove(id);
    }
    computeBudget = function() {
        const arr = this.employees.getAll();
        return arr.reduce((sum, current) => sum + current.salary, 0);
    }

    processEmployees = function(processingFunction) {
        this.employees.getAll().forEach(processingFunction);
    }
}