package com.peluditoscare.app.service;

import java.util.Set;

import com.peluditoscare.app.model.Users;


public interface UsersService {

    Iterable<Users> findAll();

    Users findById(Long id);

    Users save(Users user);

    Users update(Long id, Users user);

    void deleteById(Long id);

    Set<String> getUsersWithSpecificRoleId(Long id);
}