// import dbSqlConnection from "../Database/mysqlDbConnection.js";
import { connectionSql } from "../Database/mysqlDbConnection.js";

const getAllEmployee = async () => {
  try{
  let [employee] = await connectionSql.query("SELECT * FROM employees");
  return employee;
  }catch(error){
    throw error;
  }
};

const getDepartmentManagerWithSalary = async () => {
  try{
  let [deptManagerWithSalary] = await connectionSql.query(`SELECT
   CONCAT(e.first_name, ' ', e.last_name) AS manager_name,
   e.gender AS manager_gender,
   d.dept_name AS department_name,
   s.salary
FROM
   dept_manager dm
   INNER JOIN employees e ON dm.emp_no = e.emp_no
   INNER JOIN departments d ON dm.dept_no = d.dept_no
   INNER JOIN salaries s ON dm.emp_no = s.emp_no`);
  return deptManagerWithSalary;
  }catch(error){
    throw error;
  }
};
const getDepartmentWiseMaxSalary = async () => {
  try{
  let [departmentWiseMaxSalary] = await connectionSql.query(
    `select concat(e.FirstName+''+e.LastName)`
  );
  }catch(error){
    throw error;
  }
};

const getAllEmployeeSortedAscByAgeDescByHiredate = async () => {
  try{
  let [AllEmployeeSortedAscByAgeDescByHiredate] =
    await connectionSql.query(`select * from employees e
    order by DATE_FORMAT(FROM_DAYS(DATEDIFF(now(),e.birth_date)), '%Y')+0 asc,
    hire_date desc`);
  return AllEmployeeSortedAscByAgeDescByHiredate;
  }catch(error){
    throw error;
  }
};
const getSumOfDepartmentEmployeesSalary = async () => {
  try{
  let [SumOfDepartmentEmployeesSalary] =
    await connectionSql.query(`  select d.dept_name as department_name ,sum(salary)as totalSalary from departments d  join dept_emp de on de.dept_no=d.dept_no
    join salaries s on s.emp_no=de.emp_no group by dept_name;`);
  return SumOfDepartmentEmployeesSalary;
  }catch(error){
    throw error;
  }
};
const getAllEmployeeAgebetween30and40 = async () => {
  try{
  let [allEmployeeAgebetween30and40] = await connectionSql.query(
    `SELECT CONCAT(employees.first_name,' ',employees.last_name)AS EmployeeName,DATEDIFF(SYSDATE(),birth_date)/365 AS AGE from employees  WHERE(DATEDIFF(SYSDATE(), birth_date)/365)Between 30 and 40;`
  );
  return allEmployeeAgebetween30and40;
  }catch(error){
    throw error;
  }
};
 const getAllEmployeesByPagination = async (page, limit) => {
  try{
    const pageNum = Number(page);
    const limitNum = Number(limit);
    const offset = (pageNum - 1) * limitNum;
    const [result] = await connectionSql.query(
      `select concat(first_name,'  ',last_name) as Employee_Name,dept_name as Department_Name,DATE_FORMAT(FROM_DAYS(DATEDIFF(now(),e.birth_date)), '%Y')+0 AS Age,
      title as Title
      from employees e join dept_emp de on e.emp_no = de.emp_no
      join departments d on de.dept_no= d.dept_no
      join titles t on t.emp_no = e.emp_no order by age
      limit ${limitNum} offset ${offset}`
    );
    return result;
  }catch(error){
    throw error;
  }
  };

export {
  getAllEmployee,
  getDepartmentManagerWithSalary,
  getAllEmployeeSortedAscByAgeDescByHiredate,
  getSumOfDepartmentEmployeesSalary,
  getAllEmployeeAgebetween30and40,
  getAllEmployeesByPagination
};
