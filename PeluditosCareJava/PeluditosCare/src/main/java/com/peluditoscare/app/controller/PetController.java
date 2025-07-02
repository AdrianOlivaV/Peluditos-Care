package com.peluditoscare.app.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	private final PetService petService;

	public PetController(PetService petService) {
		this.petService = petService;
	}
	
	@GetMapping
	ResponseEntity<Iterable<Pet>> getallUsers(){
		Iterable<Pet> service = petService.findAllPets();
		return ResponseEntity.ok(service);
	}
	
	@PostMapping
	ResponseEntity<Pet> createPet(@RequestBody Pet pet) {
		Pet newPet = petService.savePet(pet);
		return new ResponseEntity<Pet>(newPet, HttpStatus.CREATED);
	}
	
	@GetMapping("/{id}")
	Pet getPetById(@PathVariable("id") Long id) {
		Pet existingPet = petService.findPetById(id);
		return existingPet;
	}
	
	@DeleteMapping("/{id}")
	ResponseEntity<Void> deletePet(@PathVariable("id") Long id) {
		petService.deletePetById(id);
		return ResponseEntity.noContent().build();
	}
}
