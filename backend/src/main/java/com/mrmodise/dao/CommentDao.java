package com.mrmodise.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mrmodise.model.Comment;

@Repository
public interface CommentDao extends CrudRepository<Comment, Long>{
	//List<Comment> findByPhotoId(Long photoId);
}
