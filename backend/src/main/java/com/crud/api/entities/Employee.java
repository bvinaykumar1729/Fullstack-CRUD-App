package com.crud.api.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="employee")
@NoArgsConstructor
@Getter
@Setter

public class Employee {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer employeeId;
	
	private String employeeName;
	
	private String employeeContactNumber;
	
	private String employeeAddress;
	
	private String employeeGender;
	
	private String employeeDepartment;
	
	private String employeeSkills;
	
	
}
