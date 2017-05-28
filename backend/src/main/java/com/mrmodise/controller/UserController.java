package com.mrmodise.controller;

import java.util.Date;
import java.util.Map;

import javax.servlet.ServletException;

import com.sun.net.httpserver.Authenticator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mrmodise.model.User;
import com.mrmodise.service.UserService;

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
			// set message
			message = "{\"message\": \"Please complete registration details\"}";
			// write response to client
			return new ResponseEntity<>(message, httpHeaders, HttpStatus.INTERNAL_SERVER_ERROR);
		}else{
			user.setEnabled(true);
			user.setLastPasswordResetDate(new Date());
			// save user details
			userService.save(user);
			// set message
			message = "{\"message\": \"Server Response: User registration successful\"}";
			// write response to client
			return new ResponseEntity<>(message, HttpStatus.OK);
		}
	}
}
