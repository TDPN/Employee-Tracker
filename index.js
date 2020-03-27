const inquirer = require("inquirer");
const cTable = require('console.table');
const orm = require('./config/orm');
const Questions = require("./lib/Questions")
async function init() {
    inquirer.prompt(Questions.main).then(ans => {
        switch(ans.main) {
            case 1:
                inquirer.prompt(Questions.view.list).then(ans => {
                    switch(ans.view) {
                        case 1:
                            viewAll();
                            break;
                        case 2:
                            viewAllByDepartments();
                            break;
                        case 3:
                            viewAllByManagers();
                            break;
                        case 4:
                            viewAllRoles();
                            break;
                        case 5:
                            viewAllDepartments();
                            break;
                        case 6:
                            viewTotalBudget();
                            break;
                        case 7: 
                            init();
                            break;
                    }
                })
                break
            case 2:
                inquirer.prompt(Questions.add.list).then(ans => {
                    switch(ans.add) {
                        case 1:
                            addEmployee();
                            break;
                        case 2:
                            addRole();
                            break;
                        case 3:
                            addDepartment();
                            break;
                        case 4:
                            init();
                            break;
                    }
                })
                break
            case 3:
                inquirer.prompt(Questions.update.list).then(ans => {
                    switch(ans.update) {
                        case 1:
                            updateEmployeeRole();
                            break;
                        case 2:
                            updateEmployeeManager();
                            break;
                        case 3:
                            init();
                            break;
                    }
                })
                break
            case 4:
                inquirer.prompt(Questions.remove.list).then(ans => {
                    switch(ans.remove) {
                        case 1:
                            removeEmployee();
                            break;
                        case 2:
                            removeRole();
                            break;
                        case 3:
                            removeDepartment();
                            break;
                        case 4:
                            init();
                            break;
                    }
                })
                break
            case 5:
                orm.connection.end();
                return;
        };
    });
}
function viewAll() {
    var query = `SELECT employee.id,
    concat(employee.first_name, " ", employee.last_name) as \`name\`,
    role.title,
    department.name as department,
    role.salary,
    (manager_id) as manager
    FROM employee
    left JOIN \`role\` ON employee.role_id = \`role\`.id
    left join department on \`role\`.department_id = department.id`;
    orm.connection.query(query,(err,result)=> {
        result.forEach((row => {
            viewEmployee(row.manager, res => {
                if (res[0] != undefined) {
                    row.manager = res[0].first_name + " " + res[0].last_name
                }
                else {
                    row.manager = "";
                }
                if (row.id == result[result.length - 1].id) {
                    console.table(result)
                    init();
                }
            })
        }))
    })
}
function viewAllByDepartments() {

}
function viewAllByManagers() {
    
}
function addEmployee() {
    colToArray("role", ["id","title"], roles => {
        colToArray("employee", ["first_name", "last_name", "id"], managers => {
            inquirer.prompt(Questions.add.employee(roles,managers)).then(ans => {
                orm.create(["employee"],
                ["first_name", "last_name", "role_id", "manager_id"],
                [ans.first_name,ans.last_name,ans.role_id, ans.manager_id], () => {
                    viewAll();
                })
            })
        })
    })
}
function updateEmployeeRole() {
    colToArray("employee", ["first_name", "last_name", "id"], employees => {
        colToArray("role", ["title", "id"], roles => {
            inquirer.prompt(Questions.update.employeeRole(employees,roles)).then(ans => {
                orm.update(
                    "employee", 
                    {"role_id" : ans.role_id}, 
                    "id = " + ans.id,
                    () => {
                        viewAll();
                    }
                )
            })
        })
    })
}
function updateEmployeeManager() {
    colToArray("employee", ["first_name", "last_name", "id"], employees => {
        colToArray("employee", ["first_name", "last_name", "id"], managers => {
            inquirer.prompt(Questions.update.employeeManager(employees,managers)).then(ans => {
                orm.update(
                    "employee", 
                    {"manager_id" : ans.manager_id}, 
                    "id = " + ans.id,
                    () => {
                        viewAll();
                    }
                )
            })
        })
    })
}
function viewAllRoles() {
    var query = "SELECT `role`.id,`role`.title,`role`.salary, department.name as department FROM `role`";
    query += "LEFT JOIN department ON `role`.department_id = department.id;";
    orm.connection.query(query,(err,result)=> {
        console.table(result);
        init()
    })
}
function viewEmployee(id, cb) {
    var query = `SELECT * from employee where employee.id = ${id}`;
    orm.connection.query(query,(err,result)=> {
        cb(result)
    })
}
function addRole() {
    colToArray("department", ["id","name"], departments => {
        inquirer.prompt(Questions.add.role(departments)).then(ans => {
            orm.create(["role"],["title", "salary", "department_id"], [ans.title,ans.salary,ans.department_id], () => {
                viewAllRoles();
            })
        })
    })
}
function removeRole() {
    colToArray("role", ["title","id"], roles => {
        inquirer.prompt(Questions.remove.role(roles)).then(ans => {
            orm.delete("role", "id = '"+ ans.id + "'", result => {
                viewAllRoles();
            })
        })
    })
}
function viewAllDepartments() {
    orm.all("department", function(res) {
        console.table(res);
        init();
    })
}
function addDepartment() {
    inquirer.prompt(Questions.add.department).then(ans => {
        orm.create("department",["name"], [ans.name], () => {
            viewAllDepartments();
        })
    })
}
function colToArray(col, cols, cb) {
    orm.select(col, cols, result => {
        const array = [];
        result.forEach(row => {
            const keys = Object.keys(row);
            const innerObject = [];
            keys.forEach(key => {
                innerObject[key] = row[key]
            })
            array.push(innerObject);
        })
        cb(array)
    })
}
function removeDepartment() {
    colToArray("department", ["name", "id"], departments => {
        inquirer.prompt(Questions.remove.department(departments)).then(ans => {
            orm.delete("department", "id = '"+ ans.id + "'", result => {
                viewAllDepartments();
            })
        })
    })
}
function removeEmployee() {
    colToArray("employee", ["id", "first_name", "last_name"], employees => {
        inquirer.prompt(Questions.remove.employee(employees)).then(ans => {
            orm.delete("employee", "id = "+ ans.id + "", result => {
                viewAll();
            })
        })
    })
}
function viewTotalBudget() {
    
}
init()