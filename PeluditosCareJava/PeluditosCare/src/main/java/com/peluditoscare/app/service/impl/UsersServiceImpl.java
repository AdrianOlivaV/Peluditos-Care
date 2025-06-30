package com.peluditoscare.app.service.impl;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.peluditoscare.app.model.Users;
import com.peluditoscare.app.repository.UsersRepository;
import com.peluditoscare.app.service.UsersService;

@Service
public class UsersServiceImpl implements UsersService{

	UsersRepository userRepository;
	
	public UsersServiceImpl(UsersRepository usersRepository) {
		super();
		this.userRepository = usersRepository;
	}
	
	@Override
	public Iterable<Users> findAll() {
		return userRepository.findAll();
	}

	@Override
	public Users findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Users save(Users user) {
		user.setId_users(null);
		Users newUsers = userRepository.save(user);
		return newUsers;
	}

	@Override
	public Users update(Long id, Users user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteById(Long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Set<String> getUsersWithSpecificRoleId(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
