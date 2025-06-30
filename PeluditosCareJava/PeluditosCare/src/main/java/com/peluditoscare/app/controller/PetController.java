package com.peluditoscare.app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.peluditoscare.app.model.Pet;
import com.peluditoscare.app.service.PetService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/pets")
public class PetController {
	
	PetService petService;

	public PetController(PetService petService) {
		this.petService = petService;
	}
	
	@GetMapping
	Iterable<Pet> getallUsers(){
		Iterable<Pet> service = petService.findAllPets();
		return service;
	}
	
	@PostMapping
	Pet createPet(@RequestBody Pet pet) {
		Pet newPet = petService.savePet(pet);
		return newPet;
	}
	
}
