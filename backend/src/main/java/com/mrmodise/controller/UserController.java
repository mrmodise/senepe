package com.mrmodise.controller;

import com.mrmodise.model.User;
import com.mrmodise.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping("/auth")
public class UserController {
	
	@Autowired
	private UserService userService;
	String message;

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<String> registerUser(@RequestBody User user){
		// set response header as application/json
		final HttpHeaders httpHeaders= new HttpHeaders();
		httpHeaders.setContentType(MediaType.APPLICATION_JSON);

		if(user == null){
			// write response to client
			return ResponseEntity.badRequest().body("{\"message\": \"Please complete registration details\"}");
		}else{
			user.setEnabled(true);
			user.setLastPasswordResetDate(new Date());
			// save user details
			userService.save(user);
			// write response to client
			return ResponseEntity.ok("{\"message\": \"Server Response: User registration was successful\"}");
		}
	}
}
