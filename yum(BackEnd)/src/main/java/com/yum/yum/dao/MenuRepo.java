package com.yum.yum.dao;

import java.sql.Date;
import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.yum.yum.model.Menu;

@Repository
public interface MenuRepo extends JpaRepository<Menu,Integer> {

	@Query(value="SELECT * FROM MENU m WHERE m.category='active' and m.launch<sysdate()",nativeQuery=true)
	public Collection<Menu> getMenu();
	
//	@Query("SELECT e FROM Employee e WHERE e.status =?1")
//	Collection<Employee> findAllActiveEmployees();
//	@Query(value="SELECT * FROM MENU m WHERE m.launch<sysdate",nativeQuery=true)
//	Collection<Menu> activeMenu();
	
	
}
