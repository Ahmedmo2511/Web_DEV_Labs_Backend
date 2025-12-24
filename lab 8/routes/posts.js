var express = require('express');
var router = express.Router();


const posts = [
  {
    id: 1,
    title: "Getting Started with Node.js",
    content: "Node.js is a powerful JavaScript runtime built on Chrome's V8 engine. It allows developers to build scalable server-side applications using JavaScript. In this post, we explore the basics of Node.js, including setting up your environment and creating your first server.",
    comments: [
      { id: 1, content: "Excellent introduction! Very helpful for beginners." },
      { id: 2, content: "Can't wait for the advanced topics tutorial." },
      { id: 3, content: "This cleared up a lot of confusion for me!" }
    ] 
  },
  {
    id: 2,
    title: "Best Practices for React Development",
    content: "React has become the go-to library for building modern web applications. This article covers essential best practices including component structure, state management, performance optimization, and testing strategies that every React developer should know.",
    comments: [
      { id: 1, content: "Finally, a comprehensive guide on React best practices!" },
      { id: 2, content: "The state management section was particularly useful." },
      { id: 3, content: "Implementing these practices improved our app performance significantly." }
    ]
  },
  {
    id: 3,
    title: "Understanding REST APIs",
    content: "REST (Representational State Transfer) APIs are fundamental to modern web development. Learn about HTTP methods, status codes, and how to design RESTful endpoints that are scalable, maintainable, and easy to consume by client applications.",
    comments: [
      { id: 1, content: "This demystified REST APIs for me!" },
      { id: 2, content: "Great examples and clear explanations." },
      { id: 3, content: "Shared this with my whole team." },
      { id: 4, content: "The status codes section was gold." }
    ]
  },
  {
    id: 4,
    title: "Database Optimization Tips",
    content: "Optimizing your database queries can dramatically improve application performance. Discover indexing strategies, query optimization techniques, and how to identify bottlenecks using profiling tools. Learn from real-world scenarios and performance metrics.",
    comments: [
      { id: 1, content: "These optimization tips saved our database from crashing!" },
      { id: 2, content: "The indexing section deserves its own detailed post." },
      { id: 3, content: "Performance improved by 40% after applying these strategies." },
      { id: 4, content: "Clear and practical advice!" }
    ]
  },
  {
    id: 5,
    title: "CSS Grid vs Flexbox: When to Use Each",
    content: "Both CSS Grid and Flexbox are powerful layout tools, but they serve different purposes. This post compares both approaches, explains their strengths and weaknesses, and provides practical examples to help you choose the right tool for your layout needs.",
    comments: [
      { id: 1, content: "Finally understand when to use each!" },
      { id: 2, content: "The comparison examples were super helpful." }
    ]
  },
  {
    id: 6,
    title: "Security Best Practices for Web Applications",
    content: "Security should be a top priority in web development. Learn about common vulnerabilities like SQL injection and XSS attacks, how to implement secure authentication, and best practices for protecting user data. Includes practical code examples and security testing strategies.",
    comments: [
      { id: 1, content: "Essential reading for every developer!" },
      { id: 2, content: "We implemented all these recommendations in our app." },
      { id: 3, content: "More developers need to read about security." }
    ]
  }
];

router.get('/', (req, res) => {
  res.json(posts);
});

router.get('/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const post = posts.find(p => p.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

router.post('/newpost', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

router.post('/:id/comments', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const post = posts.find(p => p.id === postId);
  if (post) {
    const newComment = {
      id: post.comments.length + 1,
      content: req.body.content
    };
    post.comments.push(newComment);
    res.status(201).json(newComment);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

router.delete('/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const postIndex = posts.findIndex(p => p.id === postId);
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

router.delete('/:postId/comments/:commentId', (req, res) => {
  const postId = parseInt(req.params.postId, 10);
  const commentId = parseInt(req.params.commentId, 10);
  const post = posts.find(p => p.id === postId);
  if (post) {
    const commentIndex = post.comments.findIndex(c => c.id === commentId);
    if (commentIndex !== -1) {
      post.comments.splice(commentIndex, 1);
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Comment not found' });
    }
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

module.exports = router; 