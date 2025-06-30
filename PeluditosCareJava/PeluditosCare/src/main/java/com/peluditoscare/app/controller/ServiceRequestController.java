package com.peluditoscare.app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.peluditoscare.app.model.ServiceRequest;
import com.peluditoscare.app.service.ServiceRequestService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/service-requests")
public class ServiceRequestController {
	ServiceRequestService serviceRequest;

	public ServiceRequestController(ServiceRequestService serviceRequest) {
		this.serviceRequest = serviceRequest;
	}
	
    @GetMapping
    public Iterable<ServiceRequest> getAllServiceRequests() {
        Iterable<ServiceRequest> serviceRequests = serviceRequest.findAll();
        return serviceRequests;
    }
    
    @PostMapping
    ServiceRequest createServiceRequest(@RequestBody ServiceRequest service) {
    	ServiceRequest newService = serviceRequest.saveServiceRequest(service);
    	return newService;
    }

}
