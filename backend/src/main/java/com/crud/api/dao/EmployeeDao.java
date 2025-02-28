package com.crud.api.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.crud.api.entities.Employee;

@Repository
public interface EmployeeDao  extends CrudRepository<Employee, Integer>{

}
