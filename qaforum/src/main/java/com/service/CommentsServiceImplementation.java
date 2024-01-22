
package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Comments;
import com.repository.CommentsRepository;

@Service

public class CommentsServiceImplementation implements CommentsServiceInterface
{

	@Autowired
	CommentsRepository commentsRepo;
	
	@Override
	public Comments saveComments(Comments c)
	{
		commentsRepo.save(c);
		return c;
	}
	

	@Override
	public List<Comments> saveAllComments(List<Comments> list)
	{
		commentsRepo.saveAll(list);
		return list;
	}

	@Override
	public  Comments getOneComments(int id)
	{
		return commentsRepo.findById(id).orElse(null);

	}

	@Override
	public List<Comments> getAllComments() 
	{
		return commentsRepo.findAll();
	}

	@Override
	public void deleteCommentsById(int id) 
	{

		commentsRepo.deleteById(id);
	}

	@Override
	public Comments updateComments(Comments c) 
	{
		
		Comments existsComments =commentsRepo.findById(c.getCommentsId()).orElse(null);
		existsComments.setContents(c.getContents());
		return commentsRepo.save(existsComments);
		
	}
}
