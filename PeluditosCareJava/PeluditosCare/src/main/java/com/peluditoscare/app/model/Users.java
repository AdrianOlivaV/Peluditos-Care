package com.peluditoscare.app.model;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class Users {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_users;

    @Column(name = "birthdate", nullable = false)
    private LocalDate birthdate;

    @Column(name = "zip_code", length = 10, nullable = false)
    private String zip_code;

    @Column(name = "phone_number", length = 20, nullable = false)
    private String phone_number;

    @Column(name = "street_number", length = 20, nullable = false)
    private String street_number;

    @Column(name = "city", length = 45, nullable = false)
    private String city;

    @Column(name = "colony", length = 45, nullable = false)
    private String colony;

    @Column(name = "last_name", length = 100, nullable = false)
    private String last_name;

    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @Column(name = "about_me", columnDefinition = "TEXT", nullable = false) 
    private String about_me;

    @Column(name = "email", length = 255, nullable = false, unique = true) 
    private String email;

    @Column(name = "password", length = 255, nullable = false)
    private String password;

    @Column(name = "street", length = 255, nullable = false)
    private String street;

    @Column(name = "url_profile_picture", columnDefinition = "TEXT", nullable = false) 
    private String url_profile_picture;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<UserRole> userRoles = new HashSet<>();

    @OneToMany(mappedBy = "reviewer", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<UserReview> givenReviews = new HashSet<>();

    @OneToMany(mappedBy = "reviewedUser", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<UserReview> receivedReviews = new HashSet<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<ServiceRequest> requestedServices = new HashSet<>();

    @OneToMany(mappedBy = "caregiver", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<ServiceRequest> providedServices = new HashSet<>();

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private CaregiverDetails caregiverDetails;

    @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<Pet> pets = new HashSet<>();

	public Long getId_users() {
		return id_users;
	}

	public void setId_users(Long id_users) {
		this.id_users = id_users;
	}

	public LocalDate getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(LocalDate birthdate) {
		this.birthdate = birthdate;
	}

	public String getZip_code() {
		return zip_code;
	}

	public void setZip_code(String zip_code) {
		this.zip_code = zip_code;
	}

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}

	public String getStreet_number() {
		return street_number;
	}

	public void setStreet_number(String street_number) {
		this.street_number = street_number;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getColony() {
		return colony;
	}

	public void setColony(String colony) {
		this.colony = colony;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAbout_me() {
		return about_me;
	}

	public void setAbout_me(String about_me) {
		this.about_me = about_me;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getUrl_profile_picture() {
		return url_profile_picture;
	}

	public void setUrl_profile_picture(String url_profile_picture) {
		this.url_profile_picture = url_profile_picture;
	}

	public Set<UserRole> getUserRoles() {
		return userRoles;
	}

	public void setUserRoles(Set<UserRole> userRoles) {
		this.userRoles = userRoles;
	}

	public Set<UserReview> getGivenReviews() {
		return givenReviews;
	}

	public void setGivenReviews(Set<UserReview> givenReviews) {
		this.givenReviews = givenReviews;
	}

	public Set<UserReview> getReceivedReviews() {
		return receivedReviews;
	}

	public void setReceivedReviews(Set<UserReview> receivedReviews) {
		this.receivedReviews = receivedReviews;
	}

	public Set<ServiceRequest> getRequestedServices() {
		return requestedServices;
	}

	public void setRequestedServices(Set<ServiceRequest> requestedServices) {
		this.requestedServices = requestedServices;
	}

	public Set<ServiceRequest> getProvidedServices() {
		return providedServices;
	}

	public void setProvidedServices(Set<ServiceRequest> providedServices) {
		this.providedServices = providedServices;
	}

	public CaregiverDetails getCaregiverDetails() {
		return caregiverDetails;
	}

	public void setCaregiverDetails(CaregiverDetails caregiverDetails) {
		this.caregiverDetails = caregiverDetails;
	}

	public Set<Pet> getPets() {
		return pets;
	}

	public void setPets(Set<Pet> pets) {
		this.pets = pets;
	}
	
	public Users() {
		
	}
	
	public Users(Long id_users, LocalDate birthdate, String zip_code, String phone_number, String street_number,
			String city, String colony, String last_name, String name, String about_me, String email, String password,
			String street, String url_profile_picture, Set<UserRole> userRoles, Set<UserReview> givenReviews,
			Set<UserReview> receivedReviews, Set<ServiceRequest> requestedServices,
			Set<ServiceRequest> providedServices, CaregiverDetails caregiverDetails, Set<Pet> pets) {
		super();
		this.id_users = id_users;
		this.birthdate = birthdate;
		this.zip_code = zip_code;
		this.phone_number = phone_number;
		this.street_number = street_number;
		this.city = city;
		this.colony = colony;
		this.last_name = last_name;
		this.name = name;
		this.about_me = about_me;
		this.email = email;
		this.password = password;
		this.street = street;
		this.url_profile_picture = url_profile_picture;
		this.userRoles = userRoles;
		this.givenReviews = givenReviews;
		this.receivedReviews = receivedReviews;
		this.requestedServices = requestedServices;
		this.providedServices = providedServices;
		this.caregiverDetails = caregiverDetails;
		this.pets = pets;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Users [id_users=");
		builder.append(id_users);
		builder.append(", birthdate=");
		builder.append(birthdate);
		builder.append(", zip_code=");
		builder.append(zip_code);
		builder.append(", phone_number=");
		builder.append(phone_number);
		builder.append(", street_number=");
		builder.append(street_number);
		builder.append(", city=");
		builder.append(city);
		builder.append(", colony=");
		builder.append(colony);
		builder.append(", last_name=");
		builder.append(last_name);
		builder.append(", name=");
		builder.append(name);
		builder.append(", about_me=");
		builder.append(about_me);
		builder.append(", email=");
		builder.append(email);
		builder.append(", password=");
		builder.append(password);
		builder.append(", street=");
		builder.append(street);
		builder.append(", url_profile_picture=");
		builder.append(url_profile_picture);
		builder.append(", userRoles=");
		builder.append(userRoles);
		builder.append(", givenReviews=");
		builder.append(givenReviews);
		builder.append(", receivedReviews=");
		builder.append(receivedReviews);
		builder.append(", requestedServices=");
		builder.append(requestedServices);
		builder.append(", providedServices=");
		builder.append(providedServices);
		builder.append(", caregiverDetails=");
		builder.append(caregiverDetails);
		builder.append(", pets=");
		builder.append(pets);
		builder.append("]");
		return builder.toString();
	}
    
}

