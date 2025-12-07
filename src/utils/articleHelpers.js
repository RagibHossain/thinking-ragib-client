/**
 * Derives an excerpt from article content
 * @param {string} content - The full article content
 * @param {number} maxLength - Maximum length of excerpt (default: 150)
 * @returns {string} The excerpt
 */
export const deriveExcerpt = (content, maxLength = 150) => {
  if (!content) return '';
  
  // Remove extra whitespace and newlines
  const cleaned = content.trim().replace(/\s+/g, ' ');
  
  if (cleaned.length <= maxLength) {
    return cleaned;
  }
  
  // Find the last space before maxLength to avoid cutting words
  const truncated = cleaned.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + '...';
  }
  
  return truncated + '...';
};

/**
 * Calculates reading time in minutes from article content
 * @param {string} content - The full article content
 * @param {number} wordsPerMinute - Average reading speed (default: 200)
 * @returns {number} Reading time in minutes (minimum 1)
 */
export const calculateReadTime = (content, wordsPerMinute = 200) => {
  if (!content) return 1;
  
  // Count words by splitting on whitespace
  const wordCount = content.trim().split(/\s+/).filter(word => word.length > 0).length;
  
  // Calculate minutes and round up, minimum 1 minute
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  
  return minutes;
};

/**
 * Generates a URL-friendly slug from a title
 * @param {string} title - The article title
 * @returns {string} The slug
 */
export const generateSlug = (title) => {
  if (!title) return '';
  
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

