package com.peluditoscare.app.model;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table(name="pets")
public class Pet {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_pets;

    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @Column(name = "behavior", length = 255, nullable = false)
    private String behavior;

    @Column(name = "age", nullable = false)
    private Integer age;

    @Column(name = "description", columnDefinition = "TEXT", nullable = false)
    private String description;

    @Column(name = "picture", columnDefinition = "TEXT", nullable = false)
    private String picture;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_user_owner", nullable = false)
    @JsonIgnore
    private Users owner;

    @OneToMany(mappedBy = "pet", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<ServiceRequestPet> serviceRequestPets = new HashSet<>();

	public Long getId_pets() {
		return id_pets;
	}

	public void setId_pets(Long id_pets) {
		this.id_pets = id_pets;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBehavior() {
		return behavior;
	}

	public void setBehavior(String behavior) {
		this.behavior = behavior;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public Users getOwner() {
		return owner;
	}

	public void setOwner(Users owner) {
		this.owner = owner;
	}

	public Set<ServiceRequestPet> getServiceRequestPets() {
		return serviceRequestPets;
	}

	public void setServiceRequestPets(Set<ServiceRequestPet> serviceRequestPets) {
		this.serviceRequestPets = serviceRequestPets;
	}
	
	public Pet() {
		
	}
	
	public Pet(Long id_pets, String name, String behavior, Integer age, String description, String picture, Users owner,
			Set<ServiceRequestPet> serviceRequestPets) {
		super();
		this.id_pets = id_pets;
		this.name = name;
		this.behavior = behavior;
		this.age = age;
		this.description = description;
		this.picture = picture;
		this.owner = owner;
		this.serviceRequestPets = serviceRequestPets;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Pet [id_pets=");
		builder.append(id_pets);
		builder.append(", name=");
		builder.append(name);
		builder.append(", behavior=");
		builder.append(behavior);
		builder.append(", age=");
		builder.append(age);
		builder.append(", description=");
		builder.append(description);
		builder.append(", picture=");
		builder.append(picture);
		builder.append(", owner=");
		builder.append(owner);
		builder.append(", serviceRequestPets=");
		builder.append(serviceRequestPets);
		builder.append("]");
		return builder.toString();
	}

    
}
