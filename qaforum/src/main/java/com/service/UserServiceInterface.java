package com.service;


import com.model.User;


public interface UserServiceInterface 
{
	public User addUser(User u);//for saving single record

	public User getUserByEmail(String tempEmail);

	public User findByEmailIdAndPassword(String tempEmail, String tempPass);
	
//	public List<User> saveAllUser(List<User> list);//java.util//for saving list of record
//	
//	public  User getOneUser(int id);
//	
//	public  List<User> getAllUser();
//
//	public void deleteById(int id);
//	
//	public User updateUser(User u);
//	
}
