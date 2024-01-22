package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Post;
import com.repository.PostRepository;

@Service

public class PostServiceImplementation implements PostServiceInterface
{
	@Autowired
	PostRepository postRepo;
	
	@Override
	public Post savePost(Post p)
	{
		postRepo.save(p);
		return p;
	}
	

	@Override
	public List<Post> saveAllPost(List<Post> list)
	{
		postRepo.saveAll(list);
		return list;
	}

	@Override
	public  Post getOnePost(int id)
	{
		return postRepo.findById(id).orElse(null);

	}

	@Override
	public List<Post> getAllPost() 
	{
		return postRepo.findAll();
	}

	@Override
	public void deletePostById(int id) 
	{

		postRepo.deleteById(id);
	}

	@Override
	public Post updatePost(Post p) 
	{
		
		Post existsPost =postRepo.findById(p.getPostId()).orElse(null);
		existsPost.setContent(p.getContent());;
		return postRepo.save(existsPost);
		
	}

	
}
