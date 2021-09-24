package com.yum.yum.service;

import java.sql.Date;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yum.yum.dao.MenuRepo;
import com.yum.yum.model.Menu;

@Service
@Transactional
public class MenuService {

	@Autowired
	private MenuRepo mr;
	
	public Collection<Menu> getMenuItems(){
		return mr.findAll();
	}
	
	public Menu saveItem(Menu menu) {
		System.out.println(menu.getName());
		return mr.save(menu);
	}
	
	public Optional<Menu> fetchProductById(int id) {
		return mr.findById(id);
	}
	
	public String deleteProductById(int id) {
		String res="";
		try {
			mr.deleteById(id);
			res = "Item successfully deleted";
		}catch(Exception e) {
			res = "product with id not deleted";
		}
		return res;
	}
	
	
	public void updateMenu(Menu menu) {
		mr.save(menu);	
	}

	  public Menu getMenu(int id) { 
	  return mr.findById(id).get();
	}

	public Collection<Menu> displayMenu() {
		return mr.getMenu();
	}
}

