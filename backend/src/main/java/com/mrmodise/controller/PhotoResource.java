package com.mrmodise.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.mrmodise.model.Photo;
import com.mrmodise.model.User;
import com.mrmodise.service.PhotoService;

/**
 * 
 * @author mrmodise
 *
 */

@RestController
@RequestMapping("/rest")
public class PhotoResource {

	private String imageName;

	@Autowired
	private PhotoService photoService;

	@RequestMapping(value = "/photo/upload", method = RequestMethod.POST)
	public String upload(HttpServletRequest request, HttpServletResponse response) {
		MultipartHttpServletRequest multipartHttpServletRequest = (MultipartHttpServletRequest) request;
		Iterator<String> iterator = multipartHttpServletRequest.getFileNames();
		MultipartFile multipartFile = multipartHttpServletRequest.getFile(iterator.next());
		String fileName = multipartFile.getOriginalFilename();
		imageName = fileName;
		String path = new File("src/main/resources/static/images").getAbsolutePath() + "/" + fileName;
		System.out.println("Path is " + path);

		try {
			multipartFile.transferTo(new File(path));
			System.out.println(path);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return "Upload image successful!";
	}

	@RequestMapping(value = "/photo/add", method = RequestMethod.POST)
	public Photo addPhoto(@RequestBody Photo photo) {
		photo.setImageName(imageName);
		return photoService.save(photo);
	}

	@RequestMapping(value = "/photo/user", method = RequestMethod.POST)
	public List<Photo> getPhotoByUser(@RequestBody User user) {
		return photoService.findByUser(user);
	}

	@RequestMapping(value = "/photo/photoId", method = RequestMethod.POST)
	public Photo getPhotoById(@RequestBody Long id) {
		return photoService.findById(id);
	}

	@RequestMapping(value = "/photo/update", method = RequestMethod.POST)
	public Photo updatePhoto(@RequestBody Photo photo) {
		Photo currentPhoto = photoService.findById(photo.getId());
		currentPhoto.setLikes(photo.getLikes());
		return photoService.save(currentPhoto);
	}

	@RequestMapping(value = "/photo/delete/{id}", method = RequestMethod.DELETE)
	public String deletePhoto(@PathVariable(value = "id") Long photoId) throws Exception {
		// use the photo ID from front-end to retrieve the photo details
		Photo photo = photoService.findById(photoId);
		// retrieve the image from the resources folder
		String path = new File("src/main/resources/static/images").getAbsolutePath() + "/" + photo.getImageName();
		// pass the image location to delete
		Path paths = Paths.get(path);
		// check if the image exists
		if (Files.exists(paths)) {
			try {
				// delete the image path therefore the image
				Files.delete(paths);
			} catch (IOException e) {
				throw new Exception("Image delete failed " + e.getMessage());
			}
		}
		
		// delete the photo details from the database
		photoService.deleteById(photo.getId());

		return "Image deletion successful";
	}

}
