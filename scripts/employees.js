class Employees {
    constructor() {
        this.data = {};
    }

    add = function(employee) {
        if (this.data[employee.id]) return false
        else {
            this.data[employee.id] = employee;
            return true;
        }
    }

    get = function(id) {
        if (this.data[id]) {
            return this.data[id];
        }
        else return false;
    }

    getAll = function() {
        return Object.values(this.data);
    }

    remove = function(id) {
        if (this.data[id]) {
            delete this.data[id];
            return true;
        } else return false;
    }
}