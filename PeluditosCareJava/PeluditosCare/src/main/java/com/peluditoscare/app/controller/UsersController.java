package com.peluditoscare.app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.peluditoscare.app.model.Users;
import com.peluditoscare.app.service.UsersService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/users")
public class UsersController {
	UsersService userService;
	
	public UsersController(UsersService usersService) {
		this.userService = usersService;
	}
	
	@GetMapping
	Iterable<Users> getallUsers(){
		Iterable<Users> users = userService.findAll();
		return users;
	}
	
	@PostMapping
	Users createUsers(@RequestBody Users users) {
		Users newUsers = userService.save(users);
		return newUsers;
	}
}