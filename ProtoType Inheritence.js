function Employee(title) {
    Employee.prototype.title = title;
}

Employee.prototype.setTitle = (val) => {
    this.title = val;
};
Employee.prototype.getTitle = () => {
    return this.title;
};

function Engineer(title, isManager) {
    Employee.call(this, title);
    this.isManager = isManager;
}

Engineer.prototype = Object.create(Employee.prototype);
Engineer.prototype.constructor = Engineer;
