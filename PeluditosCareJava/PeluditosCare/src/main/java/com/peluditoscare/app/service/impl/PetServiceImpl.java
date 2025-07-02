package com.peluditoscare.app.service.impl;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.peluditoscare.app.model.Pet;
import com.peluditoscare.app.repository.PetRepository;
import com.peluditoscare.app.service.PetService;

import jakarta.transaction.Transactional;

@Service
public class PetServiceImpl implements PetService{
	
	PetRepository petRepository;
	
	public PetServiceImpl(PetRepository petRepository) {
		this.petRepository = petRepository;
	}

	@Override
	@Transactional
	public Iterable<Pet> findAllPets() {
		return petRepository.findAll();
	}

	@Override
	@Transactional
	public Pet findPetById(Long id) {
		Optional<Pet> petOpt = petRepository.findById(id);
		if( petOpt.isEmpty() ) { 
			throw new IllegalStateException("Pet does not exist with id " + id);
		}
		Pet existingPet = petOpt.get();
		return existingPet;
	}

	@Override
	@Transactional
	public Pet savePet(Pet pet) {
		pet.setId_pets(null);
		Pet newPet = petRepository.save(pet);
		return newPet;
	}

	@Override
	@Transactional
	public Pet updatePet(Long id, Pet pet) {
		Pet existingPet = findPetById(id);
		existingPet.setName( pet.getName() );
		existingPet.setAge(pet.getAge());
		existingPet.setBehavior(pet.getBehavior());
		existingPet.setDescription(pet.getDescription());
		existingPet.setPicture(pet.getPicture());	
		Pet updatedPet = petRepository.save( existingPet );
		return updatedPet;
	}

	@Override
	@Transactional
	public void deletePetById(Long id) {
		Pet existingPet = findPetById(id);
		petRepository.delete(existingPet);
	}

}
