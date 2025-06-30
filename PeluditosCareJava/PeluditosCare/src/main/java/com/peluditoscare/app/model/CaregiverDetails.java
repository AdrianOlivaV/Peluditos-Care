package com.peluditoscare.app.model;

import java.util.Arrays;

import jakarta.persistence.*;


@Entity
@Table(name = "caregiver_details")
public class CaregiverDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_caregiver_details;

    @Lob
    @Column(name = "expertise", nullable = false)
    private byte[] expertise;

    @Column(name = "permit_details", length = 500, nullable = false)
    private String permit_details;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_users", nullable = false)
    private Users user;

	public Long getId_caregiver_details() {
		return id_caregiver_details;
	}

	public void setId_caregiver_details(Long id_caregiver_details) {
		this.id_caregiver_details = id_caregiver_details;
	}

	public byte[] getExpertise() {
		return expertise;
	}

	public void setExpertise(byte[] expertise) {
		this.expertise = expertise;
	}

	public String getPermit_details() {
		return permit_details;
	}

	public void setPermit_details(String permit_details) {
		this.permit_details = permit_details;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public CaregiverDetails() {
		
	}
	
	public CaregiverDetails(Long id_caregiver_details, byte[] expertise, String permit_details, String description,
			Users user) {
		super();
		this.id_caregiver_details = id_caregiver_details;
		this.expertise = expertise;
		this.permit_details = permit_details;
		this.description = description;
		this.user = user;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("CaregiverDetails [id_caregiver_details=");
		builder.append(id_caregiver_details);
		builder.append(", expertise=");
		builder.append(Arrays.toString(expertise));
		builder.append(", permit_details=");
		builder.append(permit_details);
		builder.append(", description=");
		builder.append(description);
		builder.append(", user=");
		builder.append(user);
		builder.append("]");
		return builder.toString();
	}
    
}