package com.peluditoscare.app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.peluditoscare.app.model.Roles;
import com.peluditoscare.app.service.RoleService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/roles")
public class RoleController {
	RoleService roleService;
	
	public RoleController(RoleService roleService) {
		this.roleService = roleService;
	}
	
	@GetMapping
	Iterable<Roles> getallUsers(){
		Iterable<Roles> users = roleService.findAll();
		return users;
	}
	
	@PostMapping
	Roles createRoles(@RequestBody Roles roles) {
		Roles newUsers = roleService.save(roles);
		return newUsers;
	}
}
