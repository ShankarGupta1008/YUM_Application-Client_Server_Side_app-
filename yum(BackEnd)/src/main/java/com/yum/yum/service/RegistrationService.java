package com.yum.yum.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yum.yum.dao.RegistrationRepository;
import com.yum.yum.model.User;

@Service
public class RegistrationService {

	@Autowired
	private RegistrationRepository repo;
	
	public User saveUser(User user) {
		return repo.save(user);
	}
	
	public User fetchUserByEmailId(String emailId) {
		return repo.findByEmailId(emailId);
	}
	
	public User fetchUserEp(String emailId,String password) {
		return repo.findByEmailIdAndPassword(emailId, password);
	}
}
