package com.peluditoscare.app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.peluditoscare.app.model.UserReview;
import com.peluditoscare.app.service.UserReviewService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/reviews") 
public class UserReviewController {

    UserReviewService userReviewService; 

    public UserReviewController(UserReviewService userReviewService) {
        this.userReviewService = userReviewService;
    }

    @GetMapping
    Iterable<UserReview> getAllUserReviews() { 
        Iterable<UserReview> userReviews = userReviewService.findAll();
        return userReviews;
    }

    @PostMapping
    public UserReview createUserReview(@RequestBody UserReview review) { 
        UserReview newReview = userReviewService.saveUserReview(review); 
        return newReview; 
    }
}
