package com.peluditoscare.app.model;

import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "type_services")
public class TypeService {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_type_services;

    @Column(name = "type_service_name", length = 200, nullable = false)
    private String type_service_name;

    @Column(name = "description", columnDefinition = "TEXT", nullable = false)
    private String description;

    @OneToMany(mappedBy = "typeService", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<ServiceCost> serviceCosts = new HashSet<>();

	public Long getId_type_services() {
		return id_type_services;
	}

	public void setId_type_services(Long id_type_services) {
		this.id_type_services = id_type_services;
	}

	public String getType_service_name() {
		return type_service_name;
	}

	public void setType_service_name(String type_service_name) {
		this.type_service_name = type_service_name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Set<ServiceCost> getServiceCosts() {
		return serviceCosts;
	}

	public void setServiceCosts(Set<ServiceCost> serviceCosts) {
		this.serviceCosts = serviceCosts;
	}
	
	public TypeService() {
		
	}

	public TypeService(Long id_type_services, String type_service_name, String description,
			Set<ServiceCost> serviceCosts) {
		super();
		this.id_type_services = id_type_services;
		this.type_service_name = type_service_name;
		this.description = description;
		this.serviceCosts = serviceCosts;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("TypeService [id_type_services=");
		builder.append(id_type_services);
		builder.append(", type_service_name=");
		builder.append(type_service_name);
		builder.append(", description=");
		builder.append(description);
		builder.append(", serviceCosts=");
		builder.append(serviceCosts);
		builder.append("]");
		return builder.toString();
	}
    
}
