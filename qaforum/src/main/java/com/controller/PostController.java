package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.Post;
import com.service.PostServiceInterface;

@RestController

@CrossOrigin(origins = "http://localhost:4200")

public class PostController 
{
	@Autowired
	 PostServiceInterface postService;
	
	@PostMapping("addPost")//method name can be different becuz it calls mapping (" ")
	
	
	public  Post addPost(@RequestBody  Post p)
	{
		postService.savePost(p);
		return p;
	}
	

	@PostMapping("/addAllPosts")
	
	
	//@RequestBody set values in postman
	
	public List<Post> addAllPost(@RequestBody List<Post> list)
	{
		postService.saveAllPost(list);
		return list;
	}
	
	
	@GetMapping("/getonePostById/{id}")
	
	public Post findOnePost(@PathVariable int id)
	{
		return postService.getOnePost(id);
	}

	@GetMapping("/getAllPosts")

	
	public List<Post> findAllPost() 
	{
		return postService.getAllPost();
	}
	
	
	@DeleteMapping("/deletePostById/{id}")
	
	public void deletePostById(@PathVariable int id)
	{
		postService.deletePostById(id);
	}
	
	@PutMapping("updatePost")
	
	public  Post updatePost(@RequestBody Post p) 
	{
		return postService.updatePost(p);
	}



}
