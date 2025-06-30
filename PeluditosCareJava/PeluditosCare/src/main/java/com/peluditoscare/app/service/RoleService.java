package com.peluditoscare.app.service;

import java.util.Set;

import com.peluditoscare.app.model.Users;
import com.peluditoscare.app.model.Roles;

public interface RoleService {
    Iterable<Roles> findAll();

    Roles findById(Long id);

    Roles save(Users user);
    

    Roles update(Long id, Users user);

    void deleteById(Long id);

    Set<String> getUsersWithSpecificRoleId(Long id);

	Roles save(Roles role);
}
