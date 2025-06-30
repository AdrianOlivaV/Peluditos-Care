package com.peluditoscare.app.model;



import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="user_roles")
public class Roles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_user_roles;

    @Column(name = "role_name", length = 50, nullable = false)
    private String roleName;

    @Column(name = "description", columnDefinition = "TEXT", nullable = false)
    private String description;

    @OneToMany(mappedBy = "role", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<UserRole> userRoles = new HashSet<>();

	public Long getId_user_roles() {
		return id_user_roles;
	}

	public void setId_user_roles(Long id_user_roles) {
		this.id_user_roles = id_user_roles;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Set<UserRole> getUserRoles() {
		return userRoles;
	}

	public void setUserRoles(Set<UserRole> userRoles) {
		this.userRoles = userRoles;
	}
	
	public Roles() {
		
	}
	
	public Roles(Long id_user_roles, String roleName, String description, Set<UserRole> userRoles) {
		super();
		this.id_user_roles = id_user_roles;
		this.roleName = roleName;
		this.description = description;
		this.userRoles = userRoles;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Roles [id_user_roles=");
		builder.append(id_user_roles);
		builder.append(", roleName=");
		builder.append(roleName);
		builder.append(", description=");
		builder.append(description);
		builder.append(", userRoles=");
		builder.append(userRoles);
		builder.append("]");
		return builder.toString();
	}
    
    
}
