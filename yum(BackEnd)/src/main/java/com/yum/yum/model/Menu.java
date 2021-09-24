package com.yum.yum.model;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Menu {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private int price;
	private Date launch;
	private String category;
	private String delivery;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public Date getLaunch() {
		return launch;
	}
	public void setLaunch(Date launch) {
		this.launch = launch;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getDelivery() {
		return delivery;
	}
	public void setDelivery(String delivery) {
		this.delivery = delivery;
	}
	public Menu(int id, String name, int price, Date launch, String category, String delivery) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.launch = launch;
		this.category = category;
		this.delivery = delivery;
	}
	public Menu() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
