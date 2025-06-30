package com.peluditoscare.app.model;

import jakarta.persistence.*;

@Entity
@Table(name = "user_reviews")
public class UserReview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_user_reviews;

    @Column(name = "score", nullable = false)
    private Short score;

    @Column(name = "description", columnDefinition = "TEXT", nullable = false)
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_reviewer_user", nullable = false)
    private Users reviewer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_reviewed_user", nullable = false)
    private Users reviewedUser;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_service_requests", nullable = false)
    private ServiceRequest serviceRequest;

	public Long getId_user_reviews() {
		return id_user_reviews;
	}

	public void setId_user_reviews(Long id_user_reviews) {
		this.id_user_reviews = id_user_reviews;
	}

	public Short getScore() {
		return score;
	}

	public void setScore(Short score) {
		this.score = score;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Users getReviewer() {
		return reviewer;
	}

	public void setReviewer(Users reviewer) {
		this.reviewer = reviewer;
	}

	public Users getReviewedUser() {
		return reviewedUser;
	}

	public void setReviewedUser(Users reviewedUser) {
		this.reviewedUser = reviewedUser;
	}

	public ServiceRequest getServiceRequest() {
		return serviceRequest;
	}

	public void setServiceRequest(ServiceRequest serviceRequest) {
		this.serviceRequest = serviceRequest;
	}
	
	public UserReview() {
		
	}
	
	public UserReview(Long id_user_reviews, Short score, String description, Users reviewer, Users reviewedUser,
			ServiceRequest serviceRequest) {
		super();
		this.id_user_reviews = id_user_reviews;
		this.score = score;
		this.description = description;
		this.reviewer = reviewer;
		this.reviewedUser = reviewedUser;
		this.serviceRequest = serviceRequest;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("UserReview [id_user_reviews=");
		builder.append(id_user_reviews);
		builder.append(", score=");
		builder.append(score);
		builder.append(", description=");
		builder.append(description);
		builder.append(", reviewer=");
		builder.append(reviewer);
		builder.append(", reviewedUser=");
		builder.append(reviewedUser);
		builder.append(", serviceRequest=");
		builder.append(serviceRequest);
		builder.append("]");
		return builder.toString();
	}
    
    
}