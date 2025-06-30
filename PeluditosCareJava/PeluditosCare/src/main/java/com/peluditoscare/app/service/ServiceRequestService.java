package com.peluditoscare.app.service;

import com.peluditoscare.app.model.ServiceRequest;

public interface ServiceRequestService {
    Iterable<ServiceRequest> findAll();
    
    ServiceRequest findServiceRequestById(Long id);
    
    ServiceRequest saveServiceRequest(ServiceRequest serviceRequest);
    
    ServiceRequest updateServiceRequest(Long id, ServiceRequest serviceRequestDetails); 
    
    void deleteServiceRequestById(Long id);
    
}
