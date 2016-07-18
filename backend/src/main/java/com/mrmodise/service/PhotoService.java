package com.mrmodise.service;

import java.util.List;

import com.mrmodise.model.Photo;
import com.mrmodise.model.User;

/**
 * 
 * @author mrmodise
 *
 */

public interface PhotoService {
	Photo save(Photo photo);
	List<Photo> findByUser(User user);
	Photo findById(Long photoId);
	List<Photo> findAll();
	void deleteById(Long photoId);
}
