const Intern = require('../lib/Intern');

test('create a new employee', ()=>{
    const employee = new Intern('Guy Fieri', 54124, 'boke@gmail.org', 'Harvard');
   
    // Test employee creation 
    expect(employee.name).toBe('Guy Fieri');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('boke@gmail.org');
    expect(employee.school).toBe('Harvard');
});

test('test getName()', () => {
    // creates a new employee
    const employee = new Intern('Guy Fieri', 54124, 'boke@gmail.org', 'Harvard');
    // get name should === the assigned name
    expect(employee.getName()).toBe('Guy Fieri');

});

test('test getEmail()', () => {
    // creates a new employee
    const employee = new Intern('Guy Fieri', 54124, 'boke@gmail.org', 'Harvard');
    // get email should === the assigned email
    expect(employee.getEmail()).toBe('boke@gmail.org');

});
test('test getId()', () => {
    // creates a new employee
    const employee = new Intern('Guy Fieri', 54124, 'boke@gmail.org', 'Harvard');
    // get id should === the assigned id
    expect(employee.getId()).toBe(54124);

});

test('test getSchool()', () => {
    // creates a new employee
    const employee = new Intern('Guy Fieri', 54124, 'boke@gmail.org', 'Harvard');
    // get id should === the assigned id
    expect(employee.getSchool()).toBe('Harvard');

});

test('test getRole()', () => {
    // creates a new employee
    const employee = new Intern('Guy Fieri', 54124, 'boke@gmail.org', 'Harvard');
    // get name should === the assigned name
    expect(employee.getRole()).toBe('Intern');

});