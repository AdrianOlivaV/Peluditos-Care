package com.peluditoscare.app.service.impl;


import java.util.Optional;

import org.springframework.stereotype.Service;

import com.peluditoscare.app.model.Roles;
import com.peluditoscare.app.repository.RoleRepository;
import com.peluditoscare.app.service.RoleService;

import jakarta.transaction.Transactional;

@Service
public class RoleServiceImpl implements RoleService{

	private final RoleRepository roleRepository;
	
	public RoleServiceImpl(RoleRepository roleRepository) {
		this.roleRepository = roleRepository;
	}
	@Override
	@Transactional
	public Iterable<Roles> findAll() {
		return roleRepository.findAll();
	}

	@Override
	@Transactional
	public Roles findById(Long id) {
		Optional<Roles> roleOpt = roleRepository.findById(id);
		if( roleOpt.isEmpty() ) { 
			throw new IllegalStateException("Role does not exist with id " + id);
		}
		Roles existingRole = roleOpt.get();
		return existingRole;
	}

	@Override
	@Transactional
	public Roles save(Roles role) {
		role.setId_user_roles(null);
		Roles newRole = roleRepository.save(role);
		return newRole;
	}
	
	@Override
	@Transactional
	public Roles update(Long id, Roles role) {
		Roles existingRole = findById(id);
		existingRole.setRoleName( role.getRoleName() );
		existingRole.setDescription(role.getDescription());
		Roles updatedRole = roleRepository.save( existingRole );
		return updatedRole;
	}

	@Override
	@Transactional
	public void deleteById(Long id) {
		// TODO Auto-generated method stub
		
	}


}
