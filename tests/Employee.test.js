const Employee = require('../lib/Employee');

test('create a new employee', ()=>{
    const employee = new Employee('Guy Fieri', 54124, 'boke@gmail.org');
   
    // Test employee creation 
    expect(employee.name).toBe('Guy Fieri');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('boke@gmail.org');
});

test('test getName()', () => {
    // creates a new employee
    const employee = new Employee('Guy Fieri', 54124, 'boke@gmail.org');
    // get name should === the assigned name
    expect(employee.getName()).toBe('Guy Fieri');

});

test('test getEmail()', () => {
    // creates a new employee
    const employee = new Employee('Guy Fieri', 54124, 'boke@gmail.org');
    // get name should === the assigned name
    expect(employee.getEmail()).toBe('boke@gmail.org');

});
test('test getId()', () => {
    // creates a new employee
    const employee = new Employee('Guy Fieri', 54124, 'boke@gmail.org');
    // get name should === the assigned name
    expect(employee.getId()).toBe(54124);

});
test('test getRole()', () => {
    // creates a new employee
    const employee = new Employee('Guy Fieri', 54124, 'boke@gmail.org');
    // get name should === the assigned name
    expect(employee.getRole()).toBe('Employee');

});