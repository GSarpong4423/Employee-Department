var fs = require('fs');

//make single arrays - valid
var departmentID = [];
var departments = [];



//multi-demensional arrays - not valid - we will be pushing sub arrays inside
var employeeID = [];
var employeeName = [];
var employeesalaries = [];

//process 'load_dept_names.txt' file
fs.readFile('load_dept_names.txt', 'utf8', function(error, data){
    if (error) throw error;
    
    //clean the file with code
    var cleanDeptData = data.replace(/INSERT INTO `departments` VALUES \n/g, "" ); 
    // this line of code puts each statement on its own line - returns data into one big array
    var deptDataArray = cleanDeptData.split('\n');
    
    // console.log(deptDataArray);
    // console.log(cleanDeptData);

   //helps populate the arrays - single and multi
   for(var i = 0; i < deptDataArray.length; i++){ //code block 
        //populate single dimensional arrays
       departmentID.push(deptDataArray[i].slice(2,6));
       departments.push(deptDataArray[i].slice(9,-3));
       
       //populate the multi dimensional arrays
       employeeID.push([]);
       employeeName.push([]);
       employeesalaries.push([]);
       
   }
      
    //  console.log(departmentID);
    //  console.log(departments);
    //  console.log(employeeID);
    //  console.log(employeeName);
    //  console.log(employeesalaries);
//   console.log(departmentID);

});


fs.readFile('load_dept.emp.txt', 'utf8', function(error, data){
    if (error) throw error;
    
     var cleanEmployeeData = data.replace(/INSERT INTO `employees` VALUES \n/g, "" ); 
     var employeeDeptDataArray = cleanEmployeeData.split('\n');
     
     for (var i = 0; i < employeeDeptDataArray.length; i++{
         //grab only data in lines with 9999 using slice and positions
         if(employeeDeptDataArray[i].slice(28,32) == '9999');
         
         
         
     } )
    
    
});






