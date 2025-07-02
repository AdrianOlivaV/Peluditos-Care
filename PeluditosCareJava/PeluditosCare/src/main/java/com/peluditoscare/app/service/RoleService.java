package com.peluditoscare.app.service;


import com.peluditoscare.app.model.Roles;

public interface RoleService {
    Iterable<Roles> findAll();

    Roles findById(Long id);

    Roles save(Roles role);
    

    Roles update(Long id, Roles role);

    void deleteById(Long id);


}
