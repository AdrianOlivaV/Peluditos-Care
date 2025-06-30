package com.peluditoscare.app.model;

import jakarta.persistence.*;

@Entity
@Table(name="user_has_roles")
public class UserRole {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_user_has_roles;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="fk_users", nullable = false)
    private Users user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="fk_user_roles", nullable = false)
    private Roles role;

	public Long getId_user_has_roles() {
		return id_user_has_roles;
	}

	public void setId_user_has_roles(Long id_user_has_roles) {
		this.id_user_has_roles = id_user_has_roles;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public Roles getRole() {
		return role;
	}

	public void setRole(Roles role) {
		this.role = role;
	}
	
	public UserRole() {
		
	}
	
	public UserRole(Long id_user_has_roles, Users user, Roles role) {
		super();
		this.id_user_has_roles = id_user_has_roles;
		this.user = user;
		this.role = role;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("UserRole [id_user_has_roles=");
		builder.append(id_user_has_roles);
		builder.append(", user=");
		builder.append(user);
		builder.append(", role=");
		builder.append(role);
		builder.append("]");
		return builder.toString();
	}

    
}
