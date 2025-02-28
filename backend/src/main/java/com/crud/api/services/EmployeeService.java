package com.crud.api.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.api.dao.EmployeeDao;
import com.crud.api.entities.Employee;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeDao employeeDao;
	
	public Employee saveEmployee(Employee employee) {
		 return employeeDao.save(employee);
	}
	
	public List<Employee> getEmployees() {
		List<Employee> employees = new ArrayList<>();
		employeeDao.findAll().forEach(e ->employees.add(e));
		return employees;
	}
	
	public Employee getEmployee(Integer employeeId) {
			 return employeeDao.findById(employeeId).orElseThrow();
	}
	
	public void deleteEmployee(Integer employeeId) {
		employeeDao.deleteById(employeeId);
	}
	
	public Employee updateEmployee(Employee employee) {
		employeeDao.findById(employee.getEmployeeId()).orElseThrow();
		return  employeeDao.save(employee);
	}
}
