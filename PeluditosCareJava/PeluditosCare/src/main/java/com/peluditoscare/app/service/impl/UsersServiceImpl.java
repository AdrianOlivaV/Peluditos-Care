package com.peluditoscare.app.service.impl;

import java.util.Optional;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.peluditoscare.app.model.Users;
import com.peluditoscare.app.repository.UsersRepository;
import com.peluditoscare.app.service.UsersService;

import jakarta.transaction.Transactional;

@Service
public class UsersServiceImpl implements UsersService{

	private final UsersRepository userRepository;
	
	public UsersServiceImpl(UsersRepository usersRepository) {
		this.userRepository = usersRepository;
	}
	
	@Override
	@Transactional
	public Iterable<Users> findAll() {
		return userRepository.findAll();
	}

	@Override
	@Transactional
	public Users findById(Long id) {
		Optional<Users> userOpt = userRepository.findById(id);
		if( userOpt.isEmpty() ) { 
			throw new IllegalStateException("User does not exist with id " + id);
		}
		Users existingUser = userOpt.get();
		return existingUser;
	}

	@Override
	@Transactional
	public Users save(Users user) {
		user.setId_users(null);
		Users newUsers = userRepository.save(user);
		return newUsers;
	}

	@Override
	@Transactional
	public Users update(Long id, Users user) {
		Users existingUser = findById(id);
		existingUser.setName( user.getName() );
		existingUser.setBirthdate(user.getBirthdate());
		existingUser.setAbout_me(user.getAbout_me());
		existingUser.setCity(user.getCity());
		existingUser.setColony(user.getColony());
		existingUser.setEmail(user.getEmail());
		existingUser.setLast_name(user.getLast_name());
		existingUser.setPassword(user.getPassword());
		existingUser.setPhone_number(user.getPhone_number());
		existingUser.setStreet(user.getStreet());
		existingUser.setStreet_number(user.getStreet_number());
		existingUser.setUrl_profile_picture(user.getUrl_profile_picture());
		existingUser.setZip_code(user.getZip_code());
		Users updatedUser = userRepository.save( existingUser );
		return updatedUser;
	}

	@Override
	@Transactional
	public void deleteById(Long id) {
		Users existingUser = findById(id);
		userRepository.delete(existingUser);
	}

	@Override
	@Transactional
	public Set<String> getUsersWithSpecificRoleId(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
