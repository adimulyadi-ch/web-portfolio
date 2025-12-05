# How to Add New Blog Posts

This guide explains how to add new blog posts to your website using Markdown files.

## Quick Start

1. Navigate to the `content/blog/` folder
2. Create a new file: `your-post-name.md`
3. Copy the template from `_template.md`
4. Write your content
5. Save and deploy

## Step-by-Step Guide

### Step 1: Create a New Markdown File

Go to the `content/blog/` folder and create a new file. The filename should:
- Be lowercase
- Use hyphens instead of spaces
- End with `.md`
- Be descriptive of your content

**Examples:**
- `my-first-blog-post.md`
- `learning-react-hooks.md`
- `cyberpunk-story-part-2.md`

### Step 2: Add Frontmatter

At the top of your file, add the frontmatter (metadata) between `---` markers:

\`\`\`markdown
---
title: "Your Post Title"
date: "2024-12-05"
category: "blog"
tags: ["Tag1", "Tag2"]
featured: false
readTime: "5 min"
description: "Brief description"
---
\`\`\`

**Frontmatter Fields:**

- **title**: The title of your blog post (required)
- **date**: Publication date in YYYY-MM-DD format (required)
- **category**: One of: `blog`, `fiction`, `tech-writing`, `creative` (required)
- **tags**: Array of tags for your post (required)
- **featured**: `true` or `false` - whether to feature this post (required)
- **readTime**: Estimated reading time, e.g., "5 min" (required)
- **description**: Short description for preview (required)

### Step 3: Write Your Content

After the frontmatter, write your blog post using Markdown syntax:

#### Headings
\`\`\`markdown
# Heading 1
## Heading 2
### Heading 3
\`\`\`

#### Text Formatting
\`\`\`markdown
**Bold text**
*Italic text*
\`\`\`

#### Lists
\`\`\`markdown
1. Numbered item
2. Another item

- Bullet point
- Another point
\`\`\`

#### Links
\`\`\`markdown
[Link text](https://example.com)
\`\`\`

#### Code Blocks
\`\`\`markdown
\`\`\`javascript
const code = "example";
\`\`\`
\`\`\`

### Step 4: Save and Deploy

1. Save your markdown file
2. Commit your changes to Git:
   \`\`\`bash
   git add content/blog/your-post-name.md
   git commit -m "Add new blog post: Your Post Title"
   git push
   \`\`\`
3. Deploy your website (the process depends on your hosting)

## Categories Explained

- **blog**: Standard blog posts, articles, tutorials
- **fiction**: Creative fiction, short stories, narratives
- **tech-writing**: Technical articles, documentation, guides
- **creative**: Poetry, experimental writing, creative pieces

## Tips

1. **Use descriptive filenames**: They become part of the URL
2. **Keep descriptions short**: 1-2 sentences max
3. **Add relevant tags**: Helps with filtering and discovery
4. **Estimate read time**: ~200 words per minute
5. **Preview before publishing**: Test locally first

## Example: Creating a New Post

1. Create file: `content/blog/my-ai-journey.md`
2. Add content:

\`\`\`markdown
---
title: "My Journey with AI"
date: "2024-12-05"
category: "blog"
tags: ["AI", "Personal", "Technology"]
featured: true
readTime: "7 min"
description: "Sharing my personal experience learning about artificial intelligence."
---

# My Journey with AI

Last year, I started exploring artificial intelligence...

## What I Learned

Here are the key takeaways from my journey...
\`\`\`

3. Save, commit, and deploy!

## Troubleshooting

**Post not showing up?**
- Check that the file is in `content/blog/`
- Verify the frontmatter is valid
- Make sure the file ends with `.md`
- Check for syntax errors in the frontmatter

**Formatting looks wrong?**
- Ensure there's a blank line between the frontmatter and content
- Check your Markdown syntax
- Preview the file in a Markdown editor

## Need Help?

- See `_template.md` for a complete example
- Check existing posts in `content/blog/` for reference
- Markdown guide: https://www.markdownguide.org/basic-syntax/
