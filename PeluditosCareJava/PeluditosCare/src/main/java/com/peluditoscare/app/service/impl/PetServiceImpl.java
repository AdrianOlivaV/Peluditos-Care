package com.peluditoscare.app.service.impl;

import org.springframework.stereotype.Service;

import com.peluditoscare.app.model.Pet;
import com.peluditoscare.app.repository.PetRepository;
import com.peluditoscare.app.service.PetService;

@Service
public class PetServiceImpl implements PetService{
	
	PetRepository petRepository;
	
	public PetServiceImpl(PetRepository petRepository) {
		super();
		this.petRepository = petRepository;
	}

	@Override
	public Iterable<Pet> findAllPets() {
		return petRepository.findAll();
	}

	@Override
	public Pet findPetById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Pet savePet(Pet pet) {
		pet.setId_pets(null);
		Pet newPet = petRepository.save(pet);
		return newPet;
	}

	@Override
	public Pet updatePet(Long id, Pet petDetails) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deletePetById(Long id) {
		// TODO Auto-generated method stub
		
	}

}
