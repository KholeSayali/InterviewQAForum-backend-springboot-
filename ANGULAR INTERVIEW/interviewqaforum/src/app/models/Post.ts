
import { Comments } from "./comments";

export class Post {
  postId: number;
  topicTitle: string;
  content: string;
  comments: Comments[];

  constructor() {
    this.postId = 0;
    this.topicTitle = "";
    this.content = "";
    this.comments = [];
  }
}
