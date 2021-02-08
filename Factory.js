
/*  */
function Developer(name) {
    this.name = name
    this.type = "Developer"
}
function Tester(name){
    this.name = name
    this.type = "Tester"
}
function Manager(name){
    this.name = name
    this.type = "Manager"
}


function EmployeeFactory() {
    this.create=  (name, type) => {
        switch(type) {
            case 1: 
                return new Developer(name)
                break;
            case 2:
                return new Tester(name)
                break;
            case 3:
                return new Manager(name)
                break;
            
        }
    }
}
function say() {
    console.log("Hi, I am " + this.name + " and I am a " + this.type);
}
const employeeFactory = new EmployeeFactory();
const employees = []

employees.push(employeeFactory.create("Trigun", 1));

employees.push(employeeFactory.create("Shraddha", 2));

employees.push(employeeFactory.create("Pratik", 1));

employees.push(employeeFactory.create("Trija", 3));

employees.push(employeeFactory.create("Ramina", 2));

employees.forEach(emp => {say.call(emp)});