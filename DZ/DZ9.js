let company = {
    sales: [{ name: "John", salary: 1000 }, { name: "Alice", salary: 600 }],
    development: {
      web: [{ name: "Peter", salary: 2000 }, { name: "Alex", salary: 1000 }],
      internals: [{ name: "Jack", salary: 1300 }],
    },
};
  
function departmentSalary(departmentArr, departmentName) {
    let departmentSum = 0;
    departmentArr.forEach(employee => {
        departmentSum += employee.salary;
    });

    console.log(`Salary of the ${departmentName} department: `, departmentSum);
    
    departmentArr.forEach(employee => {
        console.log("\t", employee.name, employee.salary);
    });

    return departmentSum
}

function showSalary(obj, departmentName ) {
    let totalSalary = 0
    Object.entries(obj).forEach(([key, department]) => {
        if (Array.isArray(department)) {
            totalSalary += departmentSalary(department, key)
        } else {
            totalSalary += showSalary(department)
        }
    });
    return totalSalary
}

console.log(`\nTotal salary sum:`, showSalary(company)); 
