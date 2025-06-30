package com.peluditoscare.app.model;

import jakarta.persistence.*;

@Entity
@Table(name = "service_request_pets")
public class ServiceRequestPet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_service_request_pets;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_service_requests", nullable = false)
    private ServiceRequest serviceRequest;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_pets", nullable = false)
    private Pet pet;

	public Long getId_service_request_pets() {
		return id_service_request_pets;
	}

	public void setId_service_request_pets(Long id_service_request_pets) {
		this.id_service_request_pets = id_service_request_pets;
	}

	public ServiceRequest getServiceRequest() {
		return serviceRequest;
	}

	public void setServiceRequest(ServiceRequest serviceRequest) {
		this.serviceRequest = serviceRequest;
	}

	public Pet getPet() {
		return pet;
	}

	public void setPet(Pet pet) {
		this.pet = pet;
	}

	public ServiceRequestPet() {
		
	}
	
	public ServiceRequestPet(Long id_service_request_pets, ServiceRequest serviceRequest, Pet pet) {
		super();
		this.id_service_request_pets = id_service_request_pets;
		this.serviceRequest = serviceRequest;
		this.pet = pet;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("ServiceRequestPet [id_service_request_pets=");
		builder.append(id_service_request_pets);
		builder.append(", serviceRequest=");
		builder.append(serviceRequest);
		builder.append(", pet=");
		builder.append(pet);
		builder.append("]");
		return builder.toString();
	}
    
    
}
