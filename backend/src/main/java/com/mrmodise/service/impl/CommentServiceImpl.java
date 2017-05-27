package com.mrmodise.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mrmodise.dao.CommentDao;
import com.mrmodise.model.Comment;
import com.mrmodise.service.CommentService;

@Service
public class CommentServiceImpl implements CommentService{

	@Autowired
	private CommentDao commentDao;
	
	@Override
	public Comment save(Comment comment) {
		return commentDao.save(comment);
	}

	@Override
	public Comment findOne(Long commentId) {
		return commentDao.findOne(commentId);
	}

	@Override
	public List<Comment> findByPhotoId(Long photoId) {
		return null;//commentDao.findByPhotoId(photoId);
	}


}
