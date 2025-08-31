import { Post, Comment } from '../models/post.model';

export const POSTS: Post[] = [
  {
    id: 1,
    title: 'Global Climate Summit Reaches Historic Agreement',
    body: 'World leaders have reached a groundbreaking agreement at the Global Climate Summit, committing to ambitious new targets for carbon emission reductions. The accord includes specific measures for renewable energy adoption, forest conservation, and financial support for developing nations to transition to green technologies.',
    userId: 1,
    tags: ['Climate', 'Environment', 'Global'],
    createdAt: '2025-08-30 14:30:00'
  },
  {
    id: 2,
    title: 'Revolutionary AI Technology Transforms Healthcare',
    body: 'A new artificial intelligence system has shown remarkable success in early disease detection, improving diagnostic accuracy by 40%. The technology uses advanced machine learning algorithms to analyze medical imaging and patient data, potentially saving thousands of lives through earlier intervention.',
    userId: 1,
    tags: ['Technology', 'Healthcare', 'AI'],
    createdAt: '2025-08-30 12:15:00'
  },
  {
    id: 3,
    title: 'Space Mission Discovers Water on Mars',
    body: 'NASA\'s latest Mars rover has discovered significant water deposits beneath the planet\'s surface, marking a major breakthrough in space exploration. This discovery could have profound implications for future human missions to Mars and our understanding of the possibility of life beyond Earth.',
    userId: 2,
    tags: ['Space', 'Science', 'Discovery'],
    createdAt: '2025-08-30 10:45:00'
  },
  {
    id: 4,
    title: 'Economic Markets Show Strong Recovery',
    body: 'Global financial markets have shown unprecedented growth this quarter, with major indices reaching new highs. Analysts attribute this surge to increased consumer confidence, technological innovation, and strategic government policies supporting economic recovery.',
    userId: 2,
    tags: ['Economy', 'Finance', 'Markets'],
    createdAt: '2025-08-29 16:20:00'
  },
  {
    id: 5,
    title: 'Breakthrough in Renewable Energy Storage',
    body: 'Scientists have developed a new battery technology that can store renewable energy for extended periods with 95% efficiency. This innovation could revolutionize the renewable energy sector by solving the long-standing problem of energy storage for solar and wind power.',
    userId: 3,
    tags: ['Energy', 'Technology', 'Innovation'],
    createdAt: '2025-08-29 14:00:00'
  },
  {
    id: 6,
    title: 'International Trade Agreement Boosts Global Commerce',
    body: 'A new multilateral trade agreement has been signed by 25 countries, promising to reduce tariffs and streamline international commerce. The deal is expected to boost global trade by an estimated 15% over the next five years and create millions of new jobs worldwide.',
    userId: 3,
    tags: ['Trade', 'International', 'Economy'],
    createdAt: '2025-08-29 11:30:00'
  },
  {
    id: 7,
    title: 'Educational Technology Transforms Learning',
    body: 'New educational technology platforms are revolutionizing how students learn, with virtual reality and AI-powered tutoring showing remarkable results in improving academic performance and engagement across all age groups.',
    userId: 4,
    tags: ['Education', 'Technology', 'Innovation'],
    createdAt: '2025-08-28 15:45:00'
  },
  {
    id: 8,
    title: 'Eighth Post Title',
    body: 'This is the eighth post in our application. It covers some topic that users might find interesting.',
    userId: 4,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 9,
    title: 'Ninth Post Title',
    body: 'The ninth post with more example content. This will also be truncated in the post list view.',
    userId: 5,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 10,
    title: 'Tenth Post Title',
    body: 'Content for the tenth post. This marks the end of our first batch of posts.',
    userId: 5,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 11,
    title: 'Eleventh Post Title',
    body: 'This is the eleventh post. It will be loaded when the user clicks the "Load More" button.',
    userId: 6,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 12,
    title: 'Twelfth Post Title',
    body: 'The twelfth post with more example content. Part of the second batch of posts.',
    userId: 6,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 13,
    title: 'Thirteenth Post Title',
    body: 'Content for the thirteenth post. Another post in the second batch loaded after clicking "Load More".',
    userId: 7,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 14,
    title: 'Fourteenth Post Title',
    body: 'The fourteenth post containing some interesting information for our users to read.',
    userId: 7,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 15,
    title: 'Fifteenth Post Title',
    body: 'This is the fifteenth post in our application. More example content for demonstration.',
    userId: 8,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 16,
    title: 'Sixteenth Post Title',
    body: 'Content for the sixteenth post. More example text for our posts list.',
    userId: 8,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 17,
    title: 'Seventeenth Post Title',
    body: 'The seventeenth post with more interesting content for our users to explore.',
    userId: 9,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 18,
    title: 'Eighteenth Post Title',
    body: 'Content for the eighteenth post. Another example of truncated text in the card view.',
    userId: 9,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 19,
    title: 'Nineteenth Post Title',
    body: 'The nineteenth post containing some fascinating information that users might want to read about.',
    userId: 10,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 20,
    title: 'Twentieth Post Title',
    body: 'This is the twentieth post. It marks the end of our second batch of posts.',
    userId: 10,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 21,
    title: 'Twenty-First Post Title',
    body: 'Content for the twenty-first post. Part of the third batch of posts loaded after clicking "Load More" again.',
    userId: 1,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 22,
    title: 'Twenty-Second Post Title',
    body: 'The twenty-second post with more example content for our application.',
    userId: 2,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 23,
    title: 'Twenty-Third Post Title',
    body: 'This is the twenty-third post. It contains more example text for demonstration purposes.',
    userId: 3,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 24,
    title: 'Twenty-Fourth Post Title',
    body: 'Content for the twenty-fourth post. Another post in our collection of examples.',
    userId: 4,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 25,
    title: 'Twenty-Fifth Post Title',
    body: 'The twenty-fifth post containing some interesting information for our users.',
    userId: 5,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 26,
    title: 'Twenty-Sixth Post Title',
    body: 'This is the twenty-sixth post in our application. More example content.',
    userId: 6,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 27,
    title: 'Twenty-Seventh Post Title',
    body: 'Content for the twenty-seventh post. More example text for our posts list.',
    userId: 7,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 28,
    title: 'Twenty-Eighth Post Title',
    body: 'The twenty-eighth post with more interesting content for users to read.',
    userId: 8,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 29,
    title: 'Twenty-Ninth Post Title',
    body: 'Content for the twenty-ninth post. Another example of text in our application.',
    userId: 9,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
  },
  {
    id: 30,
    title: 'Thirtieth Post Title',
    body: 'This is the thirtieth and final post in our collection. It marks the end of all available posts.',
    userId: 10,
    tags: ['tag1', 'tag2', 'tag3'],
    createdAt: '2025-05-20 12:00:00'
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

//Randomly select comments for posts for dummy data
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
