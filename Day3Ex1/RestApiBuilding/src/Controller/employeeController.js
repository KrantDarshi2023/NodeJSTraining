import createHttpError from "http-errors";
import {
  getAllEmployee,
  getDepartmentManagerWithSalary,
  getAllEmployeeSortedAscByAgeDescByHiredate,
  getSumOfDepartmentEmployeesSalary,
  getAllEmployeeAgebetween30and40,
  getAllEmployeesByPagination
} from "../Services/employeeServices.js";

const getAllEmployeeController = async (req, res,next) => {
  try{
  const allEmployees = await getAllEmployee();
  res.send(allEmployees);
  }catch(error){
    next(createHttpError(500,error));
  }
};
const getDepartmentManagerWithSalaryController = async (req, res,next) => {
  try{
  const deptManagerWithSalary = await getDepartmentManagerWithSalary();
  res.send(deptManagerWithSalary);
}catch(error){
  next(createHttpError(500,error));
}
};
const getAllEmployeeSortedAscByAgeDescByHiredateController = async (
  req,
  res,next
) => {
  try{
  const allEmployeeSortedAscByAgeDescByHiredate =
    await getAllEmployeeSortedAscByAgeDescByHiredate();
  res.send(allEmployeeSortedAscByAgeDescByHiredate);
  }catch(error){
    next(createHttpError(500,error));
  }
};
const getSumOfDepartmentEmployeesSalaryController = async (req, res,next) => {
  try{
      const SumOfDepartmentEmployeesSalaryController =
    await getSumOfDepartmentEmployeesSalary();
  res.send(SumOfDepartmentEmployeesSalaryController);
  }catch(error){
    next(createHttpError(500,error));
  }
};
const getAllEmployeeAgebetween30and40Controller = async (req, res,next) => {
  try{
    const allEmployeeAgebetween30and40 =
      await getAllEmployeeAgebetween30and40();
    res.send(allEmployeeAgebetween30and40);
  }catch(error){
    next(createHttpError(500,error));
  }
  };
  const getAllEmployeesByPaginationController = async (req, res,next) => {
    try{
    const{page,limit}=req.query
    const allEmployeeUsingPagination =
      await getAllEmployeesByPagination(page,limit);
    res.send(allEmployeeUsingPagination);
    }catch(error){
      next(createHttpError(500,error));
    }
  };

export {
  getAllEmployeeController,
  getDepartmentManagerWithSalaryController,
  getAllEmployeeSortedAscByAgeDescByHiredateController,
  getSumOfDepartmentEmployeesSalaryController,
  getAllEmployeeAgebetween30and40Controller,
  getAllEmployeesByPaginationController
};
