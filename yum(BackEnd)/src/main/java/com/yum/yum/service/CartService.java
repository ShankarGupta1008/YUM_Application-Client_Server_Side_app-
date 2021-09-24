package com.yum.yum.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yum.yum.dao.CartRepo;
import com.yum.yum.model.Cart;

@Service
public class CartService {

	@Autowired
	private CartRepo cr;

	public Collection<Cart> getCartItem() {
		// TODO Auto-generated method stub
		return cr.findAll();
	}

	public Cart saveCartItem(Cart cart) {
		// TODO Auto-generated method stub
		return cr.save(cart);
	}
	
	public Cart getCart(int id) { 
		  return cr.findById(id).get();
	}
	
	public String deleteCartById(int cartId) {
		String res="";
		try {
			cr.deleteById(cartId);
			res = "Item successfully deleted";
		}catch(Exception e) {
			res = "product with id not deleted";
		}
		return res;
	}
}
