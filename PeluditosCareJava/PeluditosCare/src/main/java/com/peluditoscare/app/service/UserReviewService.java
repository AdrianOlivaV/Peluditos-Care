package com.peluditoscare.app.service;

import com.peluditoscare.app.model.UserReview;

public interface UserReviewService {
    Iterable<UserReview> findAll();
    
    UserReview findUserReviewById(Long id);
    
    UserReview saveUserReview(UserReview userReview);
    
    UserReview updateUserReview(Long id, UserReview userReviewDetails);
    
    void deleteUserReviewById(Long id);
}
