package com.peluditoscare.app.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "service_cost")
public class ServiceCost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "amount", precision = 10, scale = 2, nullable = false)
    private BigDecimal amount;

    @Column(name = "description", columnDefinition = "TEXT", nullable = false)
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_type_services", nullable = false)
    private TypeService typeService;

    @OneToMany(mappedBy = "serviceCost", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<ServiceRequest> serviceRequests = new HashSet<>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public TypeService getTypeService() {
		return typeService;
	}

	public void setTypeService(TypeService typeService) {
		this.typeService = typeService;
	}

	public Set<ServiceRequest> getServiceRequests() {
		return serviceRequests;
	}

	public void setServiceRequests(Set<ServiceRequest> serviceRequests) {
		this.serviceRequests = serviceRequests;
	}
	
	public ServiceCost() {
		
	}
	
	public ServiceCost(Long id, BigDecimal amount, String description, TypeService typeService,
			Set<ServiceRequest> serviceRequests) {
		super();
		this.id = id;
		this.amount = amount;
		this.description = description;
		this.typeService = typeService;
		this.serviceRequests = serviceRequests;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("ServiceCost [id=");
		builder.append(id);
		builder.append(", amount=");
		builder.append(amount);
		builder.append(", description=");
		builder.append(description);
		builder.append(", typeService=");
		builder.append(typeService);
		builder.append(", serviceRequests=");
		builder.append(serviceRequests);
		builder.append("]");
		return builder.toString();
	}
    
    
}
