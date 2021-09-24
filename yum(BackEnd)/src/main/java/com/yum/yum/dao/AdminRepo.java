package com.yum.yum.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yum.yum.model.Admin;

public interface AdminRepo extends JpaRepository<Admin,Integer> {

	public Admin findByEmailAndPassword(String email, String password);

}
