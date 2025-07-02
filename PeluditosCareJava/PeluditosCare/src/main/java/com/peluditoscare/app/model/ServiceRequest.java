package com.peluditoscare.app.model;

import jakarta.persistence.*;
import java.time.LocalDate; 
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "service_requests")
public class ServiceRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_service_requests;

    @Column(name = "service_date", nullable = false)
    private LocalDate serviceDate;

    @Column(name = "status", length = 45, nullable = false)
    private String status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_user_requesting", nullable = false)
    private Users user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_user_caregiver", nullable = false)
    private Users caregiver;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_service_cost", nullable = false)
    private ServiceCost serviceCost;

    @OneToMany(mappedBy = "serviceRequest", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<ServiceRequestPet> serviceRequestPets = new HashSet<>();

	public Long getId_service_requests() {
		return id_service_requests;
	}

	public void setId_service_requests(Long id_service_requests) {
		this.id_service_requests = id_service_requests;
	}

	public LocalDate getServiceDate() {
		return serviceDate;
	}

	public void setServiceDate(LocalDate serviceDate) {
		this.serviceDate = serviceDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public Users getCaregiver() {
		return caregiver;
	}

	public void setCaregiver(Users caregiver) {
		this.caregiver = caregiver;
	}

	public ServiceCost getServiceCost() {
		return serviceCost;
	}

	public void setServiceCost(ServiceCost serviceCost) {
		this.serviceCost = serviceCost;
	}

	public Set<ServiceRequestPet> getServiceRequestPets() {
		return serviceRequestPets;
	}

	public void setServiceRequestPets(Set<ServiceRequestPet> serviceRequestPets) {
		this.serviceRequestPets = serviceRequestPets;
	}

	public ServiceRequest() {
		
	}
	
	public ServiceRequest(Long id_service_requests, LocalDate serviceDate, String status, Users user, Users caregiver,
			ServiceCost serviceCost, UserReview userReview, Set<ServiceRequestPet> serviceRequestPets) {
		super();
		this.id_service_requests = id_service_requests;
		this.serviceDate = serviceDate;
		this.status = status;
		this.user = user;
		this.caregiver = caregiver;
		this.serviceCost = serviceCost;
		this.serviceRequestPets = serviceRequestPets;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("ServiceRequest [id_service_requests=");
		builder.append(id_service_requests);
		builder.append(", serviceDate=");
		builder.append(serviceDate);
		builder.append(", status=");
		builder.append(status);
		builder.append(", user=");
		builder.append(user);
		builder.append(", caregiver=");
		builder.append(caregiver);
		builder.append(", serviceCost=");
		builder.append(serviceCost);
		builder.append(", userReview=");
		builder.append(", serviceRequestPets=");
		builder.append(serviceRequestPets);
		builder.append("]");
		return builder.toString();
	}
    
    
}
