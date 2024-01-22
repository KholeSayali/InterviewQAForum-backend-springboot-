package com.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
//import javax.persistence.OneToMany;


@Entity

public class Post
{

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int postId;
	
	private String topicTitle;
	
	private String content;
	
	@ManyToMany(cascade = CascadeType.ALL)

	private List<Comments> comments;
	
	

	public Post() 
	{
		super();
	}



	public Post(int postId, String topicTitle, String content, List<Comments> comments) {
		super();
		this.postId = postId;
		this.topicTitle = topicTitle;
		this.content = content;
		this.comments = comments;
	}



	public int getPostId() {
		return postId;
	}



	public void setPostId(int postId) {
		this.postId = postId;
	}



	public String getTopicTitle() {
		return topicTitle;
	}



	public void setTopicTitle(String topicTitle) {
		this.topicTitle = topicTitle;
	}



	public String getContent() {
		return content;
	}



	public void setContent(String content) {
		this.content = content;
	}



	public List<Comments> getComments() {
		return comments;
	}



	public void setComments(List<Comments> comments) {
		this.comments = comments;
	}



	@Override
	public String toString() {
		return "Post [postId=" + postId + ", topicTitle=" + topicTitle + ", content=" + content + ", comments="
				+ comments + "]";
	}



	

	
}
