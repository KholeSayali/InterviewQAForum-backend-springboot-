package com.service;

import java.util.List;

import com.model.Comments;


public interface CommentsServiceInterface 
{
	public Comments saveComments(Comments c);//for saving single record
	
	public List<Comments> saveAllComments(List<Comments> list);//java.util//for saving list of record
	
	public  Comments getOneComments(int id);
	
	public  List<Comments> getAllComments();

	public void deleteCommentsById(int id);
	
	public Comments updateComments(Comments c);
}
