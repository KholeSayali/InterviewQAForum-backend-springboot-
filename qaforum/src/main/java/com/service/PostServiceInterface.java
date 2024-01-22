package com.service;

import java.util.List;

import com.model.Post;

public interface PostServiceInterface 
{
	public Post savePost(Post p);//for saving single record
	
	public List<Post> saveAllPost(List<Post> list);//java.util//for saving list of record
	
	public  Post getOnePost(int id);
	
	public  List<Post> getAllPost();

	public void deletePostById(int id);
	
	public Post updatePost(Post p);
}
