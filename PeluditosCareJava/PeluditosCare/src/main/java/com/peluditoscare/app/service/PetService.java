package com.peluditoscare.app.service;

import com.peluditoscare.app.model.Pet;

public interface PetService {
	
    Iterable<Pet> findAllPets();
    
    Pet findPetById(Long id);
    
    Pet savePet(Pet pet);
    
    Pet updatePet(Long id, Pet petDetails);
    
    void deletePetById(Long id);
}
