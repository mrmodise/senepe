package com.mrmodise.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mrmodise.model.Photo;
import com.mrmodise.service.PhotoService;

@RestController
@RequestMapping("/photo")
public class PhotoController {

	@Autowired
	private PhotoService photoService;

	@RequestMapping("/allPhotos")
	public List<Photo> getAllPhotos() {
		return photoService.findAll();
	}
/*
	@RequestMapping("/search")
	public  List<Photo>  search(String q, Model model) throws Exception {
		List<Photo> searchResults = null;
		try {
			// check the submitted query, if its null return all photos
			if (q.equals("") || q == null || q.trim().length() == 0) {
				searchResults = photoSearch.searchAll();
			} else {
				searchResults = photoSearch.search(q);
			}
		} catch (Exception ex) {
			throw new Exception("Your search was not successful" + ex.getMessage());
		}
		return searchResults;
	}*/

}
