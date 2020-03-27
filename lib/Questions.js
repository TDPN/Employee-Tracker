const questions = {
    main : {
        type: 'list',
        message: 'What would you like to do?',
        name: 'main',
        choices: [
            {
                name : "View",
                value : 1
            },
            {
                name : "Add",
                value : 2
            },
            {
                name : "Update",
                value : 3
            },
            {
                name : "Remove",
                value : 4
            },
            {
                name : "Exit",
                value : 5
            }
        ]
    },
    view : {
        list : {
            type: 'list',
            message: 'What would you like to view?',
            name: 'view',
            choices: [
                {
                    name: "View All Employees",
                    value: 1
                },
                // {
                //     name: "View All Employees By Department",
                //     value: 2
                // },
                // {
                //     name: "View All Employees By Manager",
                //     value: 3
                // },
                {
                    name: "View all Roles",
                    value: 4
                },
                {
                    name: "View all Departments",
                    value: 5
                },
                // {
                //     name: "View total utilized budget by department",
                //     value: 6
                // },
                {
                    name : "Main Menu",
                    value : 7
                },
            ]
        }
    },
    add : {
        list: {
            type: 'list',
            message: 'What would you like to add?',
            name: 'add',
            choices: [
                {
                    name: "Add Employee",
                    value: 1
                },
                {
                    name: "Add Role",
                    value: 2
                },
                {
                    name: "Add Department",
                    value: 3
                },
                {
                    name : "Main Menu",
                    value : 4
                }
            ]
        },
        employee(roles,managers) {
            const choices = [];
            roles.forEach(role => {
                choices.push(
                    {
                        name: role.title,
                        value : role.id
                    }
                )
            })
            const managerChoices = [];
            managers.forEach(manager => {
                managerChoices.push(
                    {
                        name: manager.first_name  + " " + manager.last_name,
                        value : manager.id
                    }
                )
            })
            managerChoices.push(
                {
                    name : "None",
                    value: null
                }
            )
            const questions = [
                {
                    type: 'input',
                    message: 'What would be the first name of the employee?',
                    name: 'first_name',
                },
                {
                    type: 'input',
                    message: 'What would be the last name of the employee?',
                    name: 'last_name',
                },
                {
                    type: 'list',
                    message: 'Which role would this employee be in?',
                    name: 'role_id',
                    choices: choices
                },
                {
                    type: 'list',
                    message: "Who will be this employee's manager?",
                    name: 'manager_id',
                    choices: managerChoices
                }
            ];
            return questions;
        },
        role(departments) {
            const choices = [];
            departments.forEach(department => {
                choices.push(
                    {
                        name: department.name,
                        value : department.id
                    }
                )
            })
            const questions = [
                {
                    type: 'input',
                    message: 'What would the name of the Role be?',
                    name: 'title',
                },
                {
                    type: 'number',
                    message: 'What would the salary of the Role be?',
                    name: 'salary',
                },
                {
                    type: 'list',
                    message: 'Which department would this role be in?',
                    name: 'department_id',
                    choices: choices
                }
            ];
            return questions;
        },
        department: {
            type: 'input',
            message: 'What would the name of the department be?',
            name: 'name'
        },

    },
    update : {
        list: {
            type: 'list',
            message: 'What would you like to update?',
            name: 'update',
            choices: [
                {
                    name: "Update Employee Role",
                    value: 1
                },
                {
                    name: "Update Employee Manager",
                    value: 2
                },
                {
                    name : "Main Menu",
                    value : 3
                }
            ]
        },
        employeeRole(employees, roles) {
            const employeeChoices = [];
            employees.forEach(employee => {
                employeeChoices.push(
                    {
                        name: employee.first_name  + " " + employee.last_name,
                        value : employee.id
                    }
                )
            })
            const roleChoices = [];
            roles.forEach(role => {
                roleChoices.push(
                    {
                        name: role.title,
                        value : role.id
                    }
                )
            })
            const question = [
                {
                    type: 'list',
                    message: 'Which employee would you like to update?',
                    name: 'id',
                    choices: employeeChoices
                },
                {
                    type: 'list',
                    message: 'Which role should this employee be on?',
                    name: 'role_id',
                    choices: roleChoices
                }
            ];
            return question;
        },
        employeeManager(employees, managers) {
            const employeeChoices = [];
            employees.forEach(employee => {
                employeeChoices.push(
                    {
                        name: employee.first_name  + " " + employee.last_name,
                        value : employee.id
                    }
                )
            })
            const managerChoices = [];
            managers.forEach(manager => {
                managerChoices.push(
                    {
                        name: manager.first_name  + " " + manager.last_name,
                        value : manager.id
                    }
                )
            })
            const question = [
                {
                    type: 'list',
                    message: 'Which employee would you like to update?',
                    name: 'id',
                    choices: employeeChoices
                },
                {
                    type: 'list',
                    message: "Who is this employee's manager?",
                    name: 'manager_id',
                    choices: managerChoices
                }
            ];
            return question;
        }
    },
    remove : {
        list : {
            type: 'list',
            message: 'What would you like to remove?',
            name: 'remove',
            choices: [
                {
                    name: "Remove Employee",
                    value: 1
                },
                {
                    name: "Remove Role",
                    value: 2
                },
                {
                    name: "Remove Department",
                    value: 3
                },
                {
                    name : "Main Menu",
                    value : 4
                }
            ]
        },
        department(departments) {
            const choices = [];
            departments.forEach(department => {
                choices.push(
                    {
                        name: department.name,
                        value : department.id
                    }
                );
            });
            const question = {
                type: 'list',
                message: 'Which department would you like to remove?',
                name: 'id',
                choices: choices
            };
            return question;
        },
        role(roles) {
            const choices = [];
            roles.forEach(role => {
                choices.push(
                    {
                        name: role.title,
                        value : role.id
                    }
                )
            })
            const question = {
                type: 'list',
                message: 'Which role would you like to remove?',
                name: 'id',
                choices: choices
            };
            return question;
        },
        employee(employees) {
            const choices = [];
            employees.forEach(employee => {
                choices.push(
                    {
                        name: employee.first_name  + " " + employee.last_name,
                        value : employee.id
                    }
                )
            })
            const questions = [
                {
                    type: 'list',
                    message: 'Which employee would you like to remove?',
                    name: 'id',
                    choices: choices
                }
            ];
            return questions;
        },
    }
}
module.exports = questions;