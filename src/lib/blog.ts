import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
    id: string
    title: string
    date: string
    category: string
    tags: string[]
    featured: boolean
    readTime: string
    description: string
    content: string
    link?: string
}

export async function getAllPosts(): Promise<BlogPost[]> {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
        return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = await Promise.all(
        fileNames
            .filter((fileName) => fileName.endsWith('.md'))
            .map(async (fileName) => {
                const id = fileName.replace(/\.md$/, '')
                const fullPath = path.join(postsDirectory, fileName)
                const fileContents = fs.readFileSync(fullPath, 'utf8')

                // Use gray-matter to parse the post metadata section
                const matterResult = matter(fileContents)

                // Use remark to convert markdown into HTML string
                const processedContent = await remark()
                    .use(html)
                    .process(matterResult.content)
                const contentHtml = processedContent.toString()

                // Combine the data with the id and contentHtml
                return {
                    id,
                    content: contentHtml,
                    title: matterResult.data.title || 'Untitled',
                    date: matterResult.data.date || new Date().toISOString(),
                    category: matterResult.data.category || 'blog',
                    tags: matterResult.data.tags || [],
                    featured: matterResult.data.featured || false,
                    readTime: matterResult.data.readTime || '5 min',
                    description: matterResult.data.description || '',
                    link: `/blog/${id}`
                } as BlogPost
            })
    )

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export async function getPostById(id: string): Promise<BlogPost | null> {
    try {
        const fullPath = path.join(postsDirectory, `${id}.md`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents)

        const processedContent = await remark()
            .use(html)
            .process(matterResult.content)
        const contentHtml = processedContent.toString()

        return {
            id,
            content: contentHtml,
            title: matterResult.data.title || 'Untitled',
            date: matterResult.data.date || new Date().toISOString(),
            category: matterResult.data.category || 'blog',
            tags: matterResult.data.tags || [],
            featured: matterResult.data.featured || false,
            readTime: matterResult.data.readTime || '5 min',
            description: matterResult.data.description || '',
            link: `/blog/${id}`
        } as BlogPost
    } catch (error) {
        console.error(`Error reading post ${id}:`, error)
        return null
    }
}
