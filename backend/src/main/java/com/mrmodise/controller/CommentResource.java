package com.mrmodise.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mrmodise.model.Comment;
import com.mrmodise.model.Photo;
import com.mrmodise.service.CommentService;
import com.mrmodise.service.PhotoService;

import java.util.List;

@RestController
@RequestMapping("/rest")
public class CommentResource {

	@Autowired
	private PhotoService photoService;
	
	@Autowired
	private CommentService commentService;

	@RequestMapping(value = "/comment/add", method = RequestMethod.POST)
	public void addComment(@RequestBody Comment comment) {
		Photo photo = photoService.findById(comment.getPhotoId());
        List<Comment> commentList = photo.getCommentList();
		comment.setPhoto(photo);
		commentService.save(comment);
	}
}
