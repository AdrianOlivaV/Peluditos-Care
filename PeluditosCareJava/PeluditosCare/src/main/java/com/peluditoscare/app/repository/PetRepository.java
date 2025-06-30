package com.peluditoscare.app.repository;

import org.springframework.data.repository.CrudRepository;

import com.peluditoscare.app.model.Pet;

public interface PetRepository extends CrudRepository<Pet, Long>{

}
