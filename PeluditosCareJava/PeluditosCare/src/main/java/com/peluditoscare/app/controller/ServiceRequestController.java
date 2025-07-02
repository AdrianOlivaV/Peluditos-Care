package com.peluditoscare.app.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.peluditoscare.app.model.ServiceRequest;
import com.peluditoscare.app.service.ServiceRequestService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/service-requests")
public class ServiceRequestController {
	
	private final ServiceRequestService serviceRequest;

	public ServiceRequestController(ServiceRequestService serviceRequest) {
		this.serviceRequest = serviceRequest;
	}
	
    @GetMapping
    ResponseEntity<Iterable<ServiceRequest>> getAllServiceRequests() {
        Iterable<ServiceRequest> serviceRequests = serviceRequest.findAll();
        return ResponseEntity.ok(serviceRequests);
    }
    
    @PostMapping
    ResponseEntity<ServiceRequest> createServiceRequest(@RequestBody ServiceRequest service) {
    	ServiceRequest newService = serviceRequest.saveServiceRequest(service);
    	return new ResponseEntity<ServiceRequest>(newService, HttpStatus.CREATED);
    }
    
	@GetMapping("/{id}")
	ServiceRequest getRequestById(@PathVariable("id") Long id) {
		ServiceRequest existingRequest = serviceRequest.findServiceRequestById(id);
		return existingRequest;
	}
	
	@PutMapping("/{id}")
	ServiceRequest updateRequest(@PathVariable("id") Long id, @RequestBody ServiceRequest service) {
		ServiceRequest updatedRequest = serviceRequest.updateServiceRequest(id, service);
		return updatedRequest;
	}
	
	@DeleteMapping("/{id}")
	ResponseEntity<Void> deleteRequest(@PathVariable("id") Long id) {
		serviceRequest.deleteServiceRequestById(id);
		return ResponseEntity.noContent().build();
	}
}
