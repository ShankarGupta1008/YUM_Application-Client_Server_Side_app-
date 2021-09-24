package com.yum.yum.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yum.yum.model.User;

public interface RegistrationRepository extends JpaRepository<User,Integer>{

	public User findByEmailId(String emailId);
	public User findByEmailIdAndPassword(String emailId,String password);
	
}
