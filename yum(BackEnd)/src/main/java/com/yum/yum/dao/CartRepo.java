package com.yum.yum.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yum.yum.model.Cart;

public interface CartRepo extends JpaRepository<Cart,Integer>{

}
