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

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public User registerUser(@RequestBody User user){
		return userService.save(user);
		
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST, produces = "application/json")
	public ResponseEntity<String> login(@RequestBody Map<String, String> json) throws ServletException {

		// set content-type
		final HttpHeaders httpHeaders= new HttpHeaders();
		httpHeaders.setContentType(MediaType.APPLICATION_JSON);
		// error messages placeholder
		String message;

		// if both username and password do not exist
		if(json.get("username") == null || json.get("password") == null){
			message = "{\"message\": \"Please fill in username and password\"}";
			// write response to client
			return new ResponseEntity<>(message, httpHeaders, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		// retrieve user credentials
		String userName = json.get("username");
		String password = json.get("password");

		// retrieve single user credentials
		User user = userService.findByUsername(userName);

		// no user found
		if (user == null){
			message = "{\"message\": \"User not found\"}";
			// write response to client
			return new ResponseEntity<>(message, httpHeaders, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		String pwd = user.getPassword();

		// password mismatch
		if(!password.equals(pwd)){
			message = "{\"message\": \"Invalid login. Please check your username and password\"}";
			// write response to client - error 500
			return new ResponseEntity<>(message, httpHeaders, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		// token builder
		String res = Jwts.builder()
				.setSubject(userName)
				.claim("roles", "user")
				.setIssuedAt(new Date())
				.signWith(SignatureAlgorithm.HS256, "montsamaisabosigo")
				.compact();
		// return OK response
		return new ResponseEntity<>(res, HttpStatus.OK);
	}
}
