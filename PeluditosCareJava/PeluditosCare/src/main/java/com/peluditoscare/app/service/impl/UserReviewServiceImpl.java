package com.peluditoscare.app.service.impl;

import org.springframework.stereotype.Service;

import com.peluditoscare.app.model.UserReview;
import com.peluditoscare.app.repository.UserReviewRepository;
import com.peluditoscare.app.service.UserReviewService;

@Service
public class UserReviewServiceImpl implements UserReviewService{

	UserReviewRepository userReviewRepository;
	
	public UserReviewServiceImpl(UserReviewRepository userReviewRepository) {
		super();
		this.userReviewRepository = userReviewRepository;
	}

	@Override
	public Iterable<UserReview> findAll() {
		return userReviewRepository.findAll();
	}

	@Override
	public UserReview findUserReviewById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UserReview saveUserReview(UserReview userReview) {
		userReview.setId_user_reviews(null);
		UserReview newUserReview = userReviewRepository.save(userReview);
		return newUserReview;
	}

	@Override
	public UserReview updateUserReview(Long id, UserReview userReviewDetails) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteUserReviewById(Long id) {
		// TODO Auto-generated method stub
		
	}

}
