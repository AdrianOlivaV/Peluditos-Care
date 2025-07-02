package com.peluditoscare.app.service.impl;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.peluditoscare.app.model.UserReview;
import com.peluditoscare.app.repository.UserReviewRepository;
import com.peluditoscare.app.service.UserReviewService;

import jakarta.transaction.Transactional;

@Service
public class UserReviewServiceImpl implements UserReviewService{

	private final UserReviewRepository userReviewRepository;
	
	public UserReviewServiceImpl(UserReviewRepository userReviewRepository) {
		this.userReviewRepository = userReviewRepository;
	}

	@Override
	@Transactional
	public Iterable<UserReview> findAll() {
		return userReviewRepository.findAll();
	}

	@Override
	@Transactional
	public UserReview findUserReviewById(Long id) {
		Optional<UserReview> reviewOpt = userReviewRepository.findById(id);
		if( reviewOpt.isEmpty() ) { 
			throw new IllegalStateException("User Review does not exist with id " + id);
		}
		UserReview existingReview = reviewOpt.get();
		return existingReview;
	}

	@Override
	@Transactional
	public UserReview saveUserReview(UserReview userReview) {
		userReview.setId_user_reviews(null);
		UserReview newUserReview = userReviewRepository.save(userReview);
		return newUserReview;
	}

	@Override
	@Transactional
	public UserReview updateUserReview(Long id, UserReview review) {
		UserReview existingReview = findUserReviewById(id);
		existingReview.setDescription( review.getDescription() );
		UserReview updatedReview = userReviewRepository.save( existingReview );
		return updatedReview;
	}

	@Override
	@Transactional
	public void deleteUserReviewById(Long id) {
		UserReview existingReview = findUserReviewById(id);
		userReviewRepository.delete(existingReview);
	}

}
