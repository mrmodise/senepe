package com.mrmodise.service;

import com.mrmodise.model.User;

public interface UserService {
	User save(User user);
	User findByUsername(String username);
}
