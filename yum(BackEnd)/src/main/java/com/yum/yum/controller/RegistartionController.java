package com.yum.yum.controller;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yum.yum.model.Admin;
import com.yum.yum.model.Cart;
import com.yum.yum.model.Menu;
import com.yum.yum.model.User;
import com.yum.yum.service.AdminService;
import com.yum.yum.service.CartService;
import com.yum.yum.service.MenuService;
import com.yum.yum.service.RegistrationService;

@RestController
//@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class RegistartionController {

	@Autowired
	private RegistrationService service;
	@Autowired
	private MenuService menuService;
	@Autowired
	private AdminService adminService;
	@Autowired
	private CartService cartService;
	
	@PostMapping("/registerUser")
	public User registerUser(@RequestBody User user) throws Exception{
		String temp = user.getEmailId();
		if(temp != null && !"".equals(temp)) {
			User ob = service.fetchUserByEmailId(temp);
			if(ob != null) {
				throw new Exception("Email id already exist!");
			}
		}
		User userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}
	
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) throws Exception {
		String te = user.getEmailId();
		String tp = user.getPassword();
		User ob = null;
		if(te != null && tp !=null) {
			ob = service.fetchUserEp(te, tp);
		}
		if(ob == null) {
			throw new Exception("Invalid credentials");
		}
		return ob;
	}
	
	//login menu with queries
	@GetMapping("/login/menu")
	public Collection<Menu> getMenuItems(){
		Collection<Menu> menus = new ArrayList<Menu>();
//		String temp = menu.getCategory();
//		Date td = menu.getLaunch();
		menus = menuService.displayMenu();
		for(Menu m: menus) {
			System.out.println(m.getName());
		}
		return menus;
	}
	
	@GetMapping("/displayMenu")
	public Collection<Menu> adminMenu(){
		return menuService.getMenuItems();
	}
	
	@PostMapping("/adminlogin")
	public Admin loginAdmin(@RequestBody Admin admin) throws Exception{
		String tempEmail = admin.getEmail();
		String tempPass = admin.getPassword();
		Admin obj = null;
		if(tempEmail != null && tempPass !=null) {
			obj = adminService.fetchAdminEp(tempEmail, tempPass);
		}
		if(obj == null) {
			throw new Exception("Invalid credentials");
		}
		return obj;
	}
	
	@PostMapping("/addCart")
	public Cart saveCart(@RequestBody Cart cart) {
		System.out.println(cart.getId());
		return cartService.saveCartItem(cart);
	}
	
	
	@PostMapping("/additem")
	public Menu saveItem(@RequestBody Menu menu) {
		return menuService.saveItem(menu);
	}
	
	@GetMapping("/fetchbyid/{id}")
	public Menu fetchMenuById(@PathVariable int id) {
		return menuService.fetchProductById(id).get();
	}
	
	@DeleteMapping("/deletebyid/{id}")
	public String deleteMenuById(@PathVariable("id") int id) {
		return menuService.deleteProductById(id);
	}
	
	@PutMapping("/updateMenu/{id}")
	public ResponseEntity<Menu> updateMenu(@PathVariable("id") int id,
			@RequestBody Menu menuItems){
		Menu menu = menuService.getMenu(id);
		menu.setCategory(menuItems.getCategory());
		menu.setDelivery(menuItems.getDelivery());
		menu.setLaunch(menuItems.getLaunch());
		menu.setName(menuItems.getName());
		menu.setPrice(menuItems.getPrice());
		final Menu updatedMenu = menuService.saveItem(menu);
		
		return ResponseEntity.ok(updatedMenu);
	}
	
	@DeleteMapping("/deletebycartid/{cartId}")
	public String deleteItemById(@PathVariable("cartId") int cartId) {
		return cartService.deleteCartById(cartId);
	}
	
	@GetMapping("/showCart")
	public Collection<Cart> getCart(){
		Collection<Cart> ct = new ArrayList<Cart>();
		ct = cartService.getCartItem();
		return ct;
	}
	
}
