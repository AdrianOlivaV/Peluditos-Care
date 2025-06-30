package com.peluditoscare.app.service.impl;

import org.springframework.stereotype.Service;

import com.peluditoscare.app.model.ServiceRequest;
import com.peluditoscare.app.repository.ServiceRequestRepository;
import com.peluditoscare.app.service.ServiceRequestService;

@Service
public class ServiceRequestServiceImpl implements ServiceRequestService{

	ServiceRequestRepository serviceRequestRepository;
	
	
	public ServiceRequestServiceImpl(ServiceRequestRepository serviceRequestRepository) {
		super();
		this.serviceRequestRepository = serviceRequestRepository;
	}

	@Override
	public Iterable<ServiceRequest> findAll() {
		return serviceRequestRepository.findAll();
	}

	@Override
	public ServiceRequest findServiceRequestById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ServiceRequest saveServiceRequest(ServiceRequest serviceRequest) {
		serviceRequest.setId_service_requests(null);
		ServiceRequest newServiceRequest = serviceRequestRepository.save(serviceRequest);
		return newServiceRequest;
	}

	@Override
	public ServiceRequest updateServiceRequest(Long id, ServiceRequest serviceRequestDetails) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteServiceRequestById(Long id) {
		// TODO Auto-generated method stub
		
	}

}
