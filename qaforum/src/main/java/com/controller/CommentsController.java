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

import com.model.Comments;
import com.service.CommentsServiceInterface;



@RestController

@CrossOrigin(origins = "http://localhost:4200")

public class CommentsController 
{
	@Autowired
	CommentsServiceInterface commentsService;
	
	@PostMapping("addComment")//method name can be different becuz it calls mapping (" ")
	
	
	public Comments addComments(@RequestBody  Comments c)
	{
		commentsService.saveComments(c);
		return c;
	}
	

	@PostMapping("/addAllComments")
	
	
	//@RequestBody set values in postman
	
	public List<Comments> addAllComments(@RequestBody List<Comments> list)
	{
		commentsService.saveAllComments(list);
		return list;
	}
	
	
	@GetMapping("/getoneCommentsById/{id}")
	
	public Comments findOneComments(@PathVariable int id)
	{
		return commentsService.getOneComments(id);
	}

	@GetMapping("/getAllComments")

	
	public List<Comments> findAllComments() 
	{
		return commentsService.getAllComments();
	}
	
	
	@DeleteMapping("/deleteCommentsById/{id}")
	
	public void deleteCommentsById(@PathVariable int id)
	{
		commentsService.deleteCommentsById(id);
	}
	
	@PutMapping("updateComments")
	
	public  Comments updateComments(@RequestBody Comments c) 
	{
		return commentsService.updateComments(c);
	}



}

