package com.mrmodise;

import javax.servlet.Filter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.mrmodise.config.JwtFilter;

@SpringBootApplication
public class BackEndApplication {
	
	@Bean
	public FilterRegistrationBean jwtFilter(){
		final FilterRegistrationBean registration = new FilterRegistrationBean();
		registration.setFilter((Filter) new JwtFilter());
		registration.addUrlPatterns("/rest/**");
		return registration;
	}

	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}
}
