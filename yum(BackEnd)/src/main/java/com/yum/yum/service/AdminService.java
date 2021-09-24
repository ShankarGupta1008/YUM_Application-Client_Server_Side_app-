package com.yum.yum.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yum.yum.dao.AdminRepo;
import com.yum.yum.model.Admin;

@Service
public class AdminService {

	@Autowired
	private AdminRepo ar;

	public Admin fetchAdminEp(String email, String password) {
		return ar.findByEmailAndPassword(email, password);
	}
	
}
