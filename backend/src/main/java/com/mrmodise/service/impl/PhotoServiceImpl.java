package com.mrmodise.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mrmodise.dao.PhotoDao;
import com.mrmodise.model.Photo;
import com.mrmodise.model.User;
import com.mrmodise.service.PhotoService;

/**
 * 
 * @author mrmodise
 *
 */

@Service
public class PhotoServiceImpl implements PhotoService {

	@Autowired
	private PhotoDao photoDao;
	
	@Override
	public Photo save(Photo photo) {
		return photoDao.save(photo);
	}

	@Override
	public List<Photo> findByUser(User user) {
		return null;
	}

	@Override
	public Photo findById(Long photoId) {
		return null;
	}

	@Override
	public List<Photo> findAll() {
		return (List<Photo>) photoDao.findAll();
	}

	@Override
	public void deleteById(Long photoId) {
		photoDao.delete(photoId);
	}

}
