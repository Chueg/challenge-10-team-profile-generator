const Manager = require('../lib/Manager');

test('create a new employee', ()=>{
    const employee = new Manager('Guy Fieri', 54124, 'boke@gmail.org', 14224);
   
    // Test employee creation 
    expect(employee.name).toBe('Guy Fieri');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('boke@gmail.org');
    expect(employee.officeNumber).toBe(14224);
});

test('test getName()', () => {
    // creates a new employee
    const employee = new Manager('Guy Fieri', 54124, 'boke@gmail.org', 14224);
    // get name should === the assigned name
    expect(employee.getName()).toBe('Guy Fieri');

});

test('test getEmail()', () => {
    // creates a new employee
    const employee = new Manager('Guy Fieri', 54124, 'boke@gmail.org', 14224);
    // get email should === the assigned email
    expect(employee.getEmail()).toBe('boke@gmail.org');

});
test('test getId()', () => {
    // creates a new employee
    const employee = new Manager('Guy Fieri', 54124, 'boke@gmail.org', 14224);
    // get id should === the assigned id
    expect(employee.getId()).toBe(54124);

});

test('test getOfficeNumber()', () => {
    // creates a new employee
    const employee = new Manager('Guy Fieri', 54124, 'boke@gmail.org', 14224);
    // get id should === the assigned id
    expect(employee.getOffice()).toBe(14224);

});

test('test getRole()', () => {
    // creates a new employee
    const employee = new Manager('Guy Fieri', 54124, 'boke@gmail.org', 14224);
    // get name should === the assigned name
    expect(employee.getRole()).toBe('Manager');

});