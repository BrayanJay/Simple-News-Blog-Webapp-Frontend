import { Post, Comment } from '../models/post.model';

export const POSTS: Post[] = [
  {
    id: 1,
    title: 'First Post Title',
    body: 'This is the content of the first post. It contains some text that will be truncated in the card view but fully visible in the details view.',
    userId: 1
  },
  {
    id: 2,
    title: 'Second Post Title',
    body: 'Content for the second post. This post also has some text that will be truncated in the card view.',
    userId: 1
  },
  {
    id: 3,
    title: 'Third Post Title',
    body: 'Content for the third post. The text will be truncated in the post list view but will be fully visible when viewing post details.',
    userId: 2
  },
  {
    id: 4,
    title: 'Fourth Post Title',
    body: 'This is the fourth post in our collection. It has some interesting content that users might want to read in full.',
    userId: 2
  },
  {
    id: 5,
    title: 'Fifth Post Title',
    body: 'The fifth post with some example text. This text will be cut off in the card view to maintain a clean layout.',
    userId: 3
  },
  {
    id: 6,
    title: 'Sixth Post Title',
    body: 'Content for the sixth post. This is another example of text that would be truncated in the card layout.',
    userId: 3
  },
  {
    id: 7,
    title: 'Seventh Post Title',
    body: 'The seventh post contains some very interesting information that users might want to read more about.',
    userId: 4
  },
  {
    id: 8,
    title: 'Eighth Post Title',
    body: 'This is the eighth post in our application. It covers some topic that users might find interesting.',
    userId: 4
  },
  {
    id: 9,
    title: 'Ninth Post Title',
    body: 'The ninth post with more example content. This will also be truncated in the post list view.',
    userId: 5
  },
  {
    id: 10,
    title: 'Tenth Post Title',
    body: 'Content for the tenth post. This marks the end of our first batch of posts.',
    userId: 5
  },
  {
    id: 11,
    title: 'Eleventh Post Title',
    body: 'This is the eleventh post. It will be loaded when the user clicks the "Load More" button.',
    userId: 6
  },
  {
    id: 12,
    title: 'Twelfth Post Title',
    body: 'The twelfth post with more example content. Part of the second batch of posts.',
    userId: 6
  },
  {
    id: 13,
    title: 'Thirteenth Post Title',
    body: 'Content for the thirteenth post. Another post in the second batch loaded after clicking "Load More".',
    userId: 7
  },
  {
    id: 14,
    title: 'Fourteenth Post Title',
    body: 'The fourteenth post containing some interesting information for our users to read.',
    userId: 7
  },
  {
    id: 15,
    title: 'Fifteenth Post Title',
    body: 'This is the fifteenth post in our application. More example content for demonstration.',
    userId: 8
  },
  {
    id: 16,
    title: 'Sixteenth Post Title',
    body: 'Content for the sixteenth post. More example text for our posts list.',
    userId: 8
  },
  {
    id: 17,
    title: 'Seventeenth Post Title',
    body: 'The seventeenth post with more interesting content for our users to explore.',
    userId: 9
  },
  {
    id: 18,
    title: 'Eighteenth Post Title',
    body: 'Content for the eighteenth post. Another example of truncated text in the card view.',
    userId: 9
  },
  {
    id: 19,
    title: 'Nineteenth Post Title',
    body: 'The nineteenth post containing some fascinating information that users might want to read about.',
    userId: 10
  },
  {
    id: 20,
    title: 'Twentieth Post Title',
    body: 'This is the twentieth post. It marks the end of our second batch of posts.',
    userId: 10
  },
  {
    id: 21,
    title: 'Twenty-First Post Title',
    body: 'Content for the twenty-first post. Part of the third batch of posts loaded after clicking "Load More" again.',
    userId: 1
  },
  {
    id: 22,
    title: 'Twenty-Second Post Title',
    body: 'The twenty-second post with more example content for our application.',
    userId: 2
  },
  {
    id: 23,
    title: 'Twenty-Third Post Title',
    body: 'This is the twenty-third post. It contains more example text for demonstration purposes.',
    userId: 3
  },
  {
    id: 24,
    title: 'Twenty-Fourth Post Title',
    body: 'Content for the twenty-fourth post. Another post in our collection of examples.',
    userId: 4
  },
  {
    id: 25,
    title: 'Twenty-Fifth Post Title',
    body: 'The twenty-fifth post containing some interesting information for our users.',
    userId: 5
  },
  {
    id: 26,
    title: 'Twenty-Sixth Post Title',
    body: 'This is the twenty-sixth post in our application. More example content.',
    userId: 6
  },
  {
    id: 27,
    title: 'Twenty-Seventh Post Title',
    body: 'Content for the twenty-seventh post. More example text for our posts list.',
    userId: 7
  },
  {
    id: 28,
    title: 'Twenty-Eighth Post Title',
    body: 'The twenty-eighth post with more interesting content for users to read.',
    userId: 8
  },
  {
    id: 29,
    title: 'Twenty-Ninth Post Title',
    body: 'Content for the twenty-ninth post. Another example of text in our application.',
    userId: 9
  },
  {
    id: 30,
    title: 'Thirtieth Post Title',
    body: 'This is the thirtieth and final post in our collection. It marks the end of all available posts.',
    userId: 10
  }
];

export const COMMENTS: Comment[] = [
  {
    id: 1,
    postId: 1,
    name: 'User One',
    email: 'user1@example.com',
    body: 'This is the first comment on post 1. It provides some feedback or thoughts about the post content.'
  },
  {
    id: 2,
    postId: 1,
    name: 'User Two',
    email: 'user2@example.com',
    body: 'Another comment on post 1. This user has a different perspective on the post.'
  },
  {
    id: 3,
    postId: 1,
    name: 'User Three',
    email: 'user3@example.com',
    body: 'A third comment on post 1. This comment adds more to the discussion.'
  },
  {
    id: 4,
    postId: 2,
    name: 'User Four',
    email: 'user4@example.com',
    body: 'First comment on post 2. This user shares their opinion about the post.'
  },
  {
    id: 5,
    postId: 2,
    name: 'User Five',
    email: 'user5@example.com',
    body: 'Another perspective on post 2. This comment adds value to the discussion.'
  },
  {
    id: 6,
    postId: 2,
    name: 'User Six',
    email: 'user6@example.com',
    body: 'A third commenter shares their thoughts on post 2.'
  },
  // Continue with comments for other posts
  {
    id: 7,
    postId: 3,
    name: 'User Seven',
    email: 'user7@example.com',
    body: 'First comment on post 3. This user has some thoughts to share.'
  },
  {
    id: 8,
    postId: 3,
    name: 'User Eight',
    email: 'user8@example.com',
    body: 'Second comment on post 3. Another perspective on the topic.'
  },
  {
    id: 9,
    postId: 3,
    name: 'User Nine',
    email: 'user9@example.com',
    body: 'A third comment on post 3, adding more to the conversation.'
  },
  // And so on for each post...
  {
    id: 10,
    postId: 4,
    name: 'User Ten',
    email: 'user10@example.com',
    body: 'First comment on post 4. This user shares their perspective.'
  },
  {
    id: 11,
    postId: 4,
    name: 'User Eleven',
    email: 'user11@example.com',
    body: 'Second comment on post 4. Another view on the topic.'
  },
  {
    id: 12,
    postId: 4,
    name: 'User Twelve',
    email: 'user12@example.com',
    body: 'Third comment on the fourth post, continuing the discussion.'
  },
  {
    id: 13,
    postId: 5,
    name: 'User Thirteen',
    email: 'user13@example.com',
    body: 'First comment on post 5. This user has some thoughts to share.'
  },
  {
    id: 14,
    postId: 5,
    name: 'User Fourteen',
    email: 'user14@example.com',
    body: 'Second comment on post 5. Another user joins the conversation.'
  },
  {
    id: 15,
    postId: 5,
    name: 'User Fifteen',
    email: 'user15@example.com',
    body: 'A third perspective on post 5, adding more depth to the discussion.'
  }
];

// Add comments for all posts (3-5 comments per post)
for (let i = 6; i <= 30; i++) {
  for (let j = 1; j <= 3 + Math.floor(Math.random() * 3); j++) {
    const commentId = COMMENTS.length + 1;
    COMMENTS.push({
      id: commentId,
      postId: i,
      name: `User ${commentId}`,
      email: `user${commentId}@example.com`,
      body: `Comment ${j} on post ${i}. This user shares their thoughts on the content.`
    });
  }
}
