var remainingEmployeesArray = ["Jim Halpert", "Pam Beezley", "Kevin Malone", "Dwight Schrute", "Andy Bernard", "Angela Martin", "Erin Hannon", 
                           "Toby Flenderson", "Stanley Hudson", "Jan Levinson", "Creed Bratton", 
                           "Ryan Howard", "Darryl Philbin", "Holly Flax", "Meredith Palmer", "Kelly Kapoor", "Gabe Lewis", 
                           "Robert California", "Phyllis Vance", "Roy Anderson", "Peter Miller", "Clark Green"];


// TODO # 1

var employeesArray = [
  {
    "name": "Oscar Martinez",
    "department": "Accounting"
  },
  {
    "name": "Michael Scott",
    "department": "Sales"
  },
  {
    "name": "Jim Halpert",
    "department": "Sales"
  },
  {
    "name": "Pam Beezley",
    "department": "Sales"
  },
  {
    "name": "Kevin Malone",
    "department": "Accounting"
  },
  {
    "name": "Dwight Schrute",
    "department": "Sales"
  },
  {
    "name": "Andy Bernard",
    "department": "Sales"
  },
  {
    "name": "Angela Martin",
    "department": "Accounting"
  },
  {
    "name": "Erin Hannon",
    "department": "Reception"
  },
  {
    "name": "Toby Flenderson",
    "department": "Human Resources"
  },
  {
    "name": "Stanley Hudson",
    "department": "Sales"
  },
  {
    "name": "Jan Levinson",
    "department": "Corporate"
  },
  {
    "name": "Creed Bratton",
    "department": "Support"
  },
  {
    "name": "Ryan Howard",
    "department": "Temps and Interns"
  },
  {
    "name": "Darryl Philbin",
    "department": "Warehouse"
  },
  {
    "name": "Holly Flax",
    "department": "Human Resources"
  },
  {
    "name": "Meredith Palmer",
    "department": "Support"
  },
  {
    "name": "Kelly Kapoor",
    "department": "Support"
  },
  {
    "name": "Gabe Lewis",
    "department": "Human Resources"
  },
  {
    "name": "Robert California",
    "department": "Corporate"
  },
  {
    "name": "Phyllis Vance",
    "department": "Sales"
  },
  {
    "name": "Roy Anderson",
    "department": "Warehouse"
  },
  {
    "name": "Peter Miller",
    "department": "Temps and Interns"
  },
  {
    "name": "Clark Green",
    "department": "Support"
  }
];

var firstNamesArray = [];
var lastNamesArray = [];
var departmentsCount = {};

// TODO # 2 Call the processAllEmployees passing the employeesArray
processAllEmployees(employeesArray);


// TODO #3
function processAllEmployees(allEmployees) {
    for (var i = 0; i < allEmployees.length; ++i) {
      if (allEmployees[i].department != 'Human Resources') {
        var names = splitFullName(allEmployees[i].name);
        firstNamesArray.push(names[0]);
        lastNamesArray.push(names[1]);
        
      }
        
      incrementDepartmentCount(allEmployees[i].department);
         
    }
  
// TODO #4
     printOutFirstNames();
}


// does work to split name
function splitFullName(name) {
  return name.split(" ");
}

// does work to keep count of dept.
function incrementDepartmentCount(dept) {
  
}


// TODO # 4 print out all of the first names to the console
// loops through first names and prints to console
function printOutFirstNames() {
  for (var i = 0; i < firstNamesArray.length; ++i) {
     console.log(firstNamesArray[i]);
  }
  
}