package com.peluditoscare.app.service.impl;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.peluditoscare.app.model.Users;
import com.peluditoscare.app.model.Roles;
import com.peluditoscare.app.repository.RoleRepository;
import com.peluditoscare.app.service.RoleService;

@Service
public class RoleServiceImpl implements RoleService{

	RoleRepository roleRepository;
	
	public RoleServiceImpl(RoleRepository roleRepository) {
		super();
		this.roleRepository = roleRepository;
	}
	@Override
	public Iterable<Roles> findAll() {
		return roleRepository.findAll();
	}

	@Override
	public Roles findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Roles save(Roles role) {
		role.setId_user_roles(null);
		Roles newRole = roleRepository.save(role);
		return newRole;
	}

	@Override
	public Roles update(Long id, Users user) {
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
	@Override
	public Roles save(Users user) {
		// TODO Auto-generated method stub
		return null;
	}

}
