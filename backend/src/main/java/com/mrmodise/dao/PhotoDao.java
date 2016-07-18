package com.mrmodise.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mrmodise.model.Photo;
import com.mrmodise.model.User;

@Repository
public interface PhotoDao extends CrudRepository<Photo, Long>{
	List<Photo> findByUser(User user);
	Photo findByPhotoId(Long photoId);
}
