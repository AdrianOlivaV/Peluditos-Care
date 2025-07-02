package com.peluditoscare.app.service.impl;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.peluditoscare.app.model.ServiceRequest;
import com.peluditoscare.app.repository.ServiceRequestRepository;
import com.peluditoscare.app.service.ServiceRequestService;

import jakarta.transaction.Transactional;

@Service
public class ServiceRequestServiceImpl implements ServiceRequestService{

	private final ServiceRequestRepository serviceRequestRepository;
	
	
	public ServiceRequestServiceImpl(ServiceRequestRepository serviceRequestRepository) {
		this.serviceRequestRepository = serviceRequestRepository;
	}

	@Override
	@Transactional
	public Iterable<ServiceRequest> findAll() {
		return serviceRequestRepository.findAll();
	}

	@Override
	@Transactional
	public ServiceRequest findServiceRequestById(Long id) {
		Optional<ServiceRequest> requestOpt = serviceRequestRepository.findById(id);
		if( requestOpt.isEmpty() ) { 
			throw new IllegalStateException("Request does not exist with id " + id);
		}
		ServiceRequest existingRequest = requestOpt.get();
		return existingRequest;
	}

	@Override
	@Transactional
	public ServiceRequest saveServiceRequest(ServiceRequest serviceRequest) {
		serviceRequest.setId_service_requests(null);
		ServiceRequest newServiceRequest = serviceRequestRepository.save(serviceRequest);
		return newServiceRequest;
	}

	@Override
	@Transactional
	public ServiceRequest updateServiceRequest(Long id, ServiceRequest request) {
		ServiceRequest existingRequest = findServiceRequestById(id);
		existingRequest.setUser( request.getUser() );
		existingRequest.setServiceCost(request.getServiceCost());
		existingRequest.setServiceDate(request.getServiceDate());
		ServiceRequest updatedRequest = serviceRequestRepository.save( existingRequest );
		return updatedRequest;
	}

	@Override
	@Transactional
	public void deleteServiceRequestById(Long id) {
		ServiceRequest existingUser = findServiceRequestById(id);
		serviceRequestRepository.delete(existingUser);
	}

}
