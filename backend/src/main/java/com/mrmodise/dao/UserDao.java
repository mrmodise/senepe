package com.mrmodise.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mrmodise.model.User;

public interface UserDao extends CrudRepository<User, Long> {
	User findByUsername(String username);
	//void deleteByPhotoList(User user);
}
