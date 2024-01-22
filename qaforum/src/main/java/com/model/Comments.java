package com.model;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity

public class Comments
{


	@Id

	private int commentsId;
	
	private String contents;

	public Comments() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Comments(int commentsId, String contents) {
		super();
		this.commentsId = commentsId;
		this.contents = contents;
	}

	public int getCommentsId() {
		return commentsId;
	}

	public void setCommentsId(int commentsId) {
		this.commentsId = commentsId;
	}

	public String getContents() {
		return contents;
	}

	public void setContents(String contents) {
		this.contents = contents;
	}

	@Override
	public String toString() {
		return "Comments [commentsId=" + commentsId + ", contents=" + contents + "]";
	}

	
}
