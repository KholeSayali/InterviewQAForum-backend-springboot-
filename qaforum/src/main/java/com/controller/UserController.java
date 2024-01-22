package com.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.User;
import com.service.UserServiceInterface;


@RestController

@CrossOrigin(origins = "http://localhost:4200")

public class UserController
{

	@Autowired
	UserServiceInterface userService;
	
	@PostMapping("addUser")//method name can be different becuz it calls mapping (" ")
	
	
	public User addUser(@RequestBody User user) throws Exception
	{
//		userService.saveUser(u);
//		return u;
		
		String tempEmail =user.getEmail();
		if(tempEmail !=null && !"".equals(tempEmail)) {
			User userObj=userService.getUserByEmail(tempEmail);
			if(userObj!=null) {
				throw new Exception("User with "+tempEmail+" is already exists");
			}
		}
		User userObj1=null;
		userObj1=userService.addUser(user);
		return userObj1;
	}
	
	@PostMapping("/loginUser")
	public User loginUser(@RequestBody User user) throws Exception {
		String tempEmail=user.getEmail();
		String tempPass=user.getPassword();
		User userObj=null;
		if(tempEmail !=null && tempPass!=null) {
			userObj=userService.findByEmailIdAndPassword(tempEmail, tempPass);
		}
		if(userObj==null) {
			throw new Exception("Bad Creadentials");
		}
		return userObj;
		
	}
//
//	@PostMapping("/addAllUsers")
//	
//	
//	//@RequestBody set values in postman
//	
//	public List<User> addAllUser(@RequestBody List<User> list)
//	{
//		userService.saveAllUser(list);
//		return list;
//	}
	
	
//	@GetMapping("/getoneUserById/{id}")
//	
//	public User findOneUser(@PathVariable int id)
//	{
//		return userService.getOneUser(id);
//	}
//
//	@GetMapping("/getAllUsers")
//
//	
//	public List<User> findAllUser() 
//	{
//		return userService.getAllUser();
//	}
//	
//	
//	@DeleteMapping("/deleteUserById/{id}")
//	
//	public void deleteById(@PathVariable int id)
//	{
//		userService.deleteById(id);
//	}
//	
//	@PutMapping("updateUser")
//	
//	public User updateUser(@RequestBody User u) 
//	{
//		return userService.updateUser(u);
//
//		
//	}
	
	
}
