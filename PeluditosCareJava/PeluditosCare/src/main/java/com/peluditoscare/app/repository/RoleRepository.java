package com.peluditoscare.app.repository;

import org.springframework.data.repository.CrudRepository;

import com.peluditoscare.app.model.Roles;

public interface RoleRepository extends CrudRepository<Roles, Long>{
	
}
