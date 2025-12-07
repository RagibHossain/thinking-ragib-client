import { generateSlug } from '../utils/articleHelpers';
import { blogContent } from './blogContent';

const mockPostsData = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    publishDate: "2024-01-15",
  },
  {
    id: 2,
    title: "Building Scalable React Applications with Modern Architecture",
    publishDate: "2024-01-10",
  },
  {
    id: 3,
    title: "The Art of Clean Code: Writing Maintainable Software",
    publishDate: "2024-01-05",
  },
  {
    id: 4,
    title: "Understanding TypeScript: Beyond the Basics",
    publishDate: "2023-12-28",
  },
  {
    id: 5,
    title: "Design Systems: Creating Consistency at Scale",
    publishDate: "2023-12-20",
  },
  {
    id: 6,
    title: "Performance Optimization in Modern Web Applications",
    publishDate: "2023-12-15",
  },
  {
    id: 7,
    title: "The Developer's Guide to Effective Remote Work",
    publishDate: "2023-12-10",
  },
  {
    id: 8,
    title: "Exploring the JAMstack: Modern Web Architecture",
    publishDate: "2023-12-05",
  },
  {
    id: 9,
    title: "CSS Grid vs Flexbox: Choosing the Right Layout Method",
    publishDate: "2023-11-30",
  },
  {
    id: 10,
    title: "API Design Best Practices for Modern Applications",
    publishDate: "2023-11-25",
  },
  {
    id: 11,
    title: "The Psychology of User Interface Design",
    publishDate: "2023-11-20",
  },
  {
    id: 12,
    title: "Microservices Architecture: Lessons Learned",
    publishDate: "2023-11-15",
  }
];

export const mockArticles = mockPostsData.map((post) => {
  const publishedDate = new Date(post.publishDate);
  const createdDate = new Date(publishedDate.getTime() - 7 * 24 * 60 * 60 * 1000); // 7 days before published
  const updatedDate = new Date(publishedDate.getTime() - 1 * 24 * 60 * 60 * 1000); // 1 day before published

  return {
    id: post.id,
    title: post.title,
    content: blogContent[post.id] || '',
    author_id: 1, // Default author ID
    slug: generateSlug(post.title),
    created_at: createdDate.toISOString(),
    updated_at: updatedDate.toISOString(),
    published_at: publishedDate.toISOString(),
  };
});

