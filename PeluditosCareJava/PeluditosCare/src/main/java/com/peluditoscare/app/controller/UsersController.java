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

import com.peluditoscare.app.model.Users;
import com.peluditoscare.app.service.UsersService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/users")
public class UsersController {
	
	private final UsersService userService;
	
	public UsersController(UsersService usersService) {
		this.userService = usersService;
	}
	
	@GetMapping
	 ResponseEntity<Iterable<Users>> getallUsers(){
		Iterable<Users> users = userService.findAll();
		return ResponseEntity.ok(users);
	}
	
	@PostMapping
	 ResponseEntity<Users> createUsers(@RequestBody Users users) {
		Users newUsers = userService.save(users);
		return new ResponseEntity<Users>(newUsers, HttpStatus.CREATED);
	}
	
	@GetMapping("/{id}")
	Users getUserById(@PathVariable("id") Long id) {
		Users existingUser = userService.findById(id);
		return existingUser;
	}
	
	@PutMapping("/{id}")
	Users updateUser(@PathVariable("id") Long id, @RequestBody Users user) {
		Users updatedUser = userService.update(id, user);
		return updatedUser;
	}
	
	@DeleteMapping("/{id}")
	ResponseEntity<Void> deleteUser(@PathVariable("id") Long id) {
		userService.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}