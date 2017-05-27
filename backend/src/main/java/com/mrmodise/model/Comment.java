package com.mrmodise.model;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * 
 * @author mrmodise
 *
 */

@Entity
public class Comment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long commentId;
	private String content;
	private Timestamp commentDate;
	
	@ManyToOne
	@JsonIgnore
	private Photo photo;
	
	private Long photoId;
	private String userName;
	
	public Comment() {
		// TODO Auto-generated constructor stub
	}
	
	public Comment(Long id, String content, Photo photo, Long photoId, String userName) {
		commentId = id;
		this.content = content;
		this.photo = photo;
		this.photoId = photoId;
		this.userName = userName;
	}
	
	public Long getCommentId() {
		return commentId;
	}

	public void setCommentId(Long commentId) {
		this.commentId = commentId;
	}

	public Timestamp getCommentDate() {
		return commentDate;
	}

	public void setCommentDate(Timestamp commentDate) {
		this.commentDate = commentDate;
	}

	public Long getId() {
		return commentId;
	}
	public void setId(Long id) {
		commentId = id;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Photo getPhoto() {
		return photo;
	}
	public void setPhoto(Photo photo) {
		this.photo = photo;
	}
	public Long getPhotoId() {
		return photoId;
	}
	public void setPhotoId(Long photoId) {
		this.photoId = photoId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
}
