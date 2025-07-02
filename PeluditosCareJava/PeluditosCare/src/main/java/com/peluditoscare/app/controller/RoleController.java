package com.peluditoscare.app.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.peluditoscare.app.model.Roles;
import com.peluditoscare.app.service.RoleService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/roles")
public class RoleController {
	
	private final RoleService roleService;
	
	public RoleController(RoleService roleService) {
		this.roleService = roleService;
	}
	
	@GetMapping
	ResponseEntity<Iterable<Roles>> getallRoles(){
		Iterable<Roles> roles = roleService.findAll();
		return ResponseEntity.ok(roles);
	}
	
	@PostMapping
	ResponseEntity<Roles> createRoles(@RequestBody Roles roles) {
		Roles newRoles = roleService.save(roles);
		return new ResponseEntity<Roles>(newRoles, HttpStatus.CREATED);
	}
	
	@GetMapping("/{id}")
	Roles getRoleById(@PathVariable("id") Long id) {
		Roles existingRoles = roleService.findById(id);
		return existingRoles;
	}
	
	@PutMapping("/{id}")
	Roles updateRole(@PathVariable("id") Long id, @RequestBody Roles role) {
		Roles updatedRoles = roleService.update(id, role);
		return updatedRoles;
	}
	
	@DeleteMapping("/{id}")
	ResponseEntity<Void> deleteRole(@PathVariable("id") Long id) {
		roleService.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}
