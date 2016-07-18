package com.mrmodise.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mrmodise.model.User;
import com.mrmodise.service.UserService;

@RestController
@RequestMapping("/rest")
public class UserResources {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping("/user/users")
	public String loginSuccessful(){
		return "Login successful";
	}
	
	@RequestMapping(value = "/user/userName", method = RequestMethod.POST)
	public User findByUserName(@RequestBody String userName){
		return userService.findByUsername(userName);
	}
	
	@RequestMapping(value = "/user/update", method = RequestMethod.POST)
	public User updateUser(@RequestBody User user){
		return userService.save(user);
	}
}
