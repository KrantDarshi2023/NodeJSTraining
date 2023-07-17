import express from "express";
import {
  getAllEmployeeController,
  getDepartmentManagerWithSalaryController,
  getAllEmployeeSortedAscByAgeDescByHiredateController,
  getSumOfDepartmentEmployeesSalaryController,
  getAllEmployeeAgebetween30and40Controller,
  getAllEmployeesByPaginationController
} from "../Controller/employeeController.js";

var employeeRouter = express.Router();

employeeRouter.get("/", getAllEmployeeController);
employeeRouter.get(
  "/deptManagerWithSalary",
  getDepartmentManagerWithSalaryController
);
employeeRouter.get(
  "/employeeAscByAgeDescByHiredate",
  getAllEmployeeSortedAscByAgeDescByHiredateController
);
employeeRouter.get(
  "/sumOfDepartmentSalary",
  getSumOfDepartmentEmployeesSalaryController
);
employeeRouter.get(
    "/employeeBetweenAge30and40",
    getAllEmployeeAgebetween30and40Controller
  );
  employeeRouter.get(
    "/employeeWithPagination",
    getAllEmployeesByPaginationController
  );

export default employeeRouter;
