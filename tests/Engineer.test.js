const Engineer = require('../lib/Engineer');

test('create a new employee', ()=>{
    const employee = new Engineer('Guy Fieri', 54124, 'boke@gmail.org', 'Chueg');
   
    // Test employee creation 
    expect(employee.name).toBe('Guy Fieri');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('boke@gmail.org');
    expect(employee.github).toBe('Chueg');
});

test('test getName()', () => {
    // creates a new employee
    const employee = new Engineer('Guy Fieri', 54124, 'boke@gmail.org', 'Chueg');
    // get name should === the assigned name
    expect(employee.getName()).toBe('Guy Fieri');

});

test('test getEmail()', () => {
    // creates a new employee
    const employee = new Engineer('Guy Fieri', 54124, 'boke@gmail.org');
    // get email should === the assigned email
    expect(employee.getEmail()).toBe('boke@gmail.org');

});
test('test getId()', () => {
    // creates a new employee
    const employee = new Engineer('Guy Fieri', 54124, 'boke@gmail.org', 'Chueg');
    // get id should === the assigned id
    expect(employee.getId()).toBe(54124);

});
test('test getGithub()', () => {
    // creates a new employee
    const employee = new Engineer('Guy Fieri', 54124, 'boke@gmail.org', 'Chueg');
    // get id should === the assigned id
    expect(employee.getGithub()).toBe('Chueg');

});
test('test getRole()', () => {
    // creates a new employee
    const employee = new Engineer('Guy Fieri', 54124, 'boke@gmail.org', 'Chueg');
    // get name should === the assigned name
    expect(employee.getRole()).toBe('Engineer');

});