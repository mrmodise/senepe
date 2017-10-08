package com.mrmodise.controller;

import com.mrmodise.model.Photo;
import com.mrmodise.model.User;
import com.mrmodise.service.PhotoService;
import com.mrmodise.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.Principal;
import java.util.Iterator;

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

    @Autowired
    private UserService userService;

	@RequestMapping(value = "/photo/upload", method = RequestMethod.POST)
	public ResponseEntity upload(HttpServletRequest request, HttpServletResponse response) {
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
		} catch (MaxUploadSizeExceededException fe){
            return ResponseEntity.badRequest().body("This is message >>>>>>>>>>>>>>>>>>>>>> " + fe.getMessage());
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(e.getMessage());
        }
		return ResponseEntity.ok("Upload image successful!");
	}

	@RequestMapping(value = "/photo/add", method = RequestMethod.POST)
	public ResponseEntity addPhoto(@RequestBody Photo photo, Principal principal) {
		photo.setImageName(imageName);
		//photo.setUser();
		User user = userService.findByUsername(principal.getName());
		photo.setUser(user);
		System.out.print("Logged in user" + principal.getName());

		if(photo.getPhotoName() != null){
			photoService.save(photo);
			return ResponseEntity.status(200).body("Server Response: Photo successfully added");
		}else{
			return ResponseEntity.badRequest().body("Server Response: Photo was not successfully added");
		}
	}

	@RequestMapping(value = "/photo/photoId", method = RequestMethod.POST)
	public Photo getPhotoById(@RequestBody Long id) {
		return photoService.findById(id);
	}

	@RequestMapping(value = "/photo/update", method = RequestMethod.POST)
	public Photo updatePhoto(@RequestBody Photo photo) {
		Photo currentPhoto = photoService.findById(photo.getPhotoId());
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
		photoService.deleteById(photo.getPhotoId());

		return "Image deletion successful";
	}

}
