package com.peluditoscare.app.repository;

import org.springframework.data.repository.CrudRepository;

import com.peluditoscare.app.model.ServiceRequest;

public interface ServiceRequestRepository extends CrudRepository<ServiceRequest, Long>{

}
