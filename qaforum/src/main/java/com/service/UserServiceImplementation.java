package com.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.User;
import com.repository.UserRepository;


@Service

public class UserServiceImplementation implements UserServiceInterface
{

	@Autowired
	UserRepository userRepo;
	
	@Override
	public User addUser(User u)
	{
//		userRepo.save(u);
//		return u;
		
		return userRepo.save(u);
	}
	
	public User getUserByEmail(String email) {

		return userRepo.findUserByEmail(email);
	}
	
	public User findByEmailIdAndPassword(String email, String password) {

		return userRepo.findByEmailIdAndPassword(email, password);
	}

//	@Override
//	public List<User> saveAllUser(List<User> list) 
//	{
//		userRepo.saveAll(list);
//		return list;
//	}
//
//	@Override
//	public  User getOneUser(int id)
//	{
//		return userRepo.findById(id).orElse(null);
//
//	}
//
//	@Override
//	public List<User> getAllUser() 
//	{
//		return userRepo.findAll();
//	}
//
//	@Override
//	public void deleteById(int id) 
//	{
//
//		userRepo.deleteById(id);
//	}
//
//	@Override
//	public User updateUser(User u) 
//	{
//		
//		User existsUser =userRepo.findById(u.getUserId()).orElse(null);
//		existsUser.setUserName(u.getUserName());
//		return userRepo.save(existsUser);
//		
//	}
//
//	


}
