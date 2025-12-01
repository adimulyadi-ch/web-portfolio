'use client'

import { useState, useEffect } from 'react'
import { Book, Code, Coffee, Mail, Github, Twitter, Linkedin, ChevronRight, Star, Calendar, User, Zap, Terminal, FileText, Award, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion, AnimatePresence } from 'framer-motion'
import { ModeToggle } from '@/components/mode-toggle'

interface Work {
  id: string
  title: string
  description: string
  category: string
  date: string
  readTime: string
  featured: boolean
  link?: string
  tags: string[]
}

interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedWork, setSelectedWork] = useState<Work | null>(null)
  const [stars, setStars] = useState<Array<{ id: string; x: number; y: number; size: number; color: string; duration: number; delay: number }>>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Generate stars only on client side
    const generatedStars = [
      // White stars
      ...Array.from({ length: 150 }, (_, i) => ({
        id: `star-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        color: 'bg-white',
        duration: Math.random() * 3 + 1,
        delay: Math.random() * 10
      })),
      // Cyan stars
      ...Array.from({ length: 200 }, (_, i) => ({
        id: `small-star-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        color: 'bg-cyan-300',
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 8
      })),
      // Purple stars
      ...Array.from({ length: 150 }, (_, i) => ({
        id: `purple-star-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.8 + 0.7,
        color: 'bg-purple-300',
        duration: Math.random() * 5 + 3,
        delay: Math.random() * 12
      })),
      // Pink stars
      ...Array.from({ length: 100 }, (_, i) => ({
        id: `pink-star-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.2 + 0.8,
        color: 'bg-pink-300',
        duration: Math.random() * 6 + 2,
        delay: Math.random() * 15
      }))
    ]
    setStars(generatedStars)
  }, [])

  const works: Work[] = [
    {
      id: '1',
      title: 'Neural Networks in Fiction',
      description: 'Exploring the intersection of artificial intelligence and creative writing in modern literature.',
      category: 'tech-writing',
      date: '2024-01-15',
      readTime: '8 min',
      featured: true,
      link: '#',
      tags: ['AI', 'Literature', 'Technology']
    },
    {
      id: '2',
      title: 'The Cyberpunk Chronicles',
      description: 'A collection of short stories set in dystopian futures where humanity and technology collide.',
      category: 'fiction',
      date: '2024-01-10',
      readTime: '12 min',
      featured: true,
      link: '#',
      tags: ['Cyberpunk', 'Fiction', 'Short Stories']
    },
    {
      id: '3',
      title: 'Digital Marketing Trends 2024',
      description: 'Comprehensive analysis of emerging marketing strategies in the digital age.',
      category: 'blog',
      date: '2024-01-05',
      readTime: '6 min',
      featured: false,
      link: '#',
      tags: ['Marketing', 'Digital', 'Trends']
    },
    {
      id: '4',
      title: 'Code Poetry: When Algorithms Meet Art',
      description: 'An experimental piece combining programming concepts with poetic expression.',
      category: 'creative',
      date: '2023-12-28',
      readTime: '5 min',
      featured: false,
      link: '#',
      tags: ['Poetry', 'Code', 'Art']
    },
    {
      id: '5',
      title: 'The Writer\'s Guide to AI Tools',
      description: 'How artificial intelligence is revolutionizing the writing process and content creation.',
      category: 'tech-writing',
      date: '2023-12-20',
      readTime: '10 min',
      featured: true,
      link: '#',
      tags: ['AI', 'Writing', 'Tools']
    }
  ]

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Editor at TechDaily',
      content: 'Exceptional writing that bridges the gap between complex technology and human emotion. A true voice of the digital age.',
      rating: 5
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      role: 'Published Author',
      content: 'Their cyberpunk narratives are visceral and thought-provoking. Each story feels like a glimpse into our possible future.',
      rating: 5
    },
    {
      id: '3',
      name: 'Emily Watson',
      role: 'Content Strategist',
      content: 'The perfect blend of technical accuracy and creative flair. Every piece is engaging and informative.',
      rating: 5
    }
  ]

  const categories = [
    { id: 'all', label: 'All Works', icon: FileText },
    { id: 'featured', label: 'Featured', icon: Star },
    { id: 'fiction', label: 'Fiction', icon: Book },
    { id: 'tech-writing', label: 'Tech Writing', icon: Code },
    { id: 'blog', label: 'Blog', icon: MessageSquare },
    { id: 'creative', label: 'Creative', icon: Zap }
  ]

  const filteredWorks = works.filter(work => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'featured') return work.featured
    return work.category === activeFilter
  })

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative scanline transition-colors duration-300">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20">
        <div className="absolute inset-0 cyber-grid" style={{
          animation: 'grid 20s linear infinite'
        }} />
      </div>

      {/* Animated Galaxy Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Stars Layer - 600+ stars */}
        <div className="absolute inset-0">
          {isClient && stars.map((star) => (
            <motion.div
              key={star.id}
              className={`absolute ${star.color} rounded-full`}
              style={{
                width: star.size + 'px',
                height: star.size + 'px',
                left: star.x + '%',
                top: star.y + '%',
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* 5 Nebula Clouds */}
        {isClient && (
          <>
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.3, 1]
              }}
              transition={{
                rotate: { duration: 80, repeat: Infinity, ease: "linear" },
                scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-1/4 left-1/4 w-96 h-96"
            >
              <div className="w-full h-full bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-cyan-400/20 rounded-full blur-3xl" />
            </motion.div>

            <motion.div
              animate={{
                rotate: -360,
                scale: [1.2, 1, 1.2]
              }}
              transition={{
                rotate: { duration: 100, repeat: Infinity, ease: "linear" },
                scale: { duration: 12, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute bottom-1/4 right-1/4 w-80 h-80"
            >
              <div className="w-full h-full bg-gradient-to-tl from-cyan-600/20 via-blue-500/10 to-purple-400/20 rounded-full blur-3xl" />
            </motion.div>

            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.4, 1]
              }}
              transition={{
                rotate: { duration: 90, repeat: Infinity, ease: "linear" },
                scale: { duration: 15, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-1/6 left-1/3 w-72 h-72"
            >
              <div className="w-full h-full bg-gradient-to-r from-pink-600/15 via-purple-500/10 to-blue-400/15 rounded-full blur-3xl" />
            </motion.div>

            <motion.div
              animate={{
                rotate: -360,
                scale: [1.3, 1, 1.3]
              }}
              transition={{
                rotate: { duration: 110, repeat: Infinity, ease: "linear" },
                scale: { duration: 18, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute bottom-1/3 left-1/6 w-64 h-64"
            >
              <div className="w-full h-full bg-gradient-to-bl from-cyan-600/15 via-purple-500/10 to-pink-400/15 rounded-full blur-3xl" />
            </motion.div>

            <motion.div
              animate={{
                rotate: 360,
                scale: [1.1, 1.5, 1.1]
              }}
              transition={{
                rotate: { duration: 70, repeat: Infinity, ease: "linear" },
                scale: { duration: 20, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-1/2 right-1/3 w-56 h-56"
            >
              <div className="w-full h-full bg-gradient-to-tr from-blue-600/12 via-purple-500/8 to-cyan-400/12 rounded-full blur-3xl" />
            </motion.div>
          </>
        )}

        {/* 2 Galaxy Spirals */}
        {isClient && (
          <>
            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64"
            >
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-400/5 to-cyan-400/10 rounded-full blur-2xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full blur-xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-tr from-pink-400/30 to-cyan-300/30 rounded-full blur-lg" />
              </div>
            </motion.div>

            <motion.div
              animate={{
                rotate: -360
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/3 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-48 h-48"
            >
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/8 via-purple-400/5 to-pink-400/8 rounded-full blur-2xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-tl from-purple-400/15 to-cyan-300/15 rounded-full blur-xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-pink-300/25 to-purple-300/25 rounded-full blur-lg" />
              </div>
            </motion.div>
          </>
        )}

        {/* 5 Shooting Stars */}
        {isClient && [...Array(5)].map((_, i) => {
          const randomX = Math.random() * 100
          const randomY = Math.random() * 60
          return (
            <motion.div
              key={`shooting-star-${i}`}
              className="absolute w-1 h-1 bg-gradient-to-r from-transparent via-white to-cyan-300"
              style={{
                left: randomX + '%',
                top: randomY + '%',
              }}
              animate={{
                x: ['-100px', '100vw'],
                y: [0, 100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeOut"
              }}
            />
          )
        })}
      </div>

      {/* Flying UFO Animation */}
      <div className="absolute top-20 left-0 w-full pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: ['-200px', '100vw', '-200px'],
            y: ['0px', '-20px', '0px']
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="relative"
        >
          <div className="relative">
            {/* UFO Body */}
            <div className="w-16 h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full relative shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-purple-400/50 rounded-full blur-sm" />
              {/* UFO Dome */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-6 bg-gradient-to-br from-cyan-300 to-purple-400 rounded-t-full opacity-80" />
              {/* UFO Lights */}
              <div className="absolute bottom-0 left-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-75" />
              <div className="absolute bottom-0 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-150" />
            </div>
            {/* Light Beam */}
            <motion.div
              animate={{
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-20 bg-gradient-to-b from-cyan-400/30 to-transparent opacity-50"
            />
          </div>
        </motion.div>
      </div>

      {/* Second UFO - Different timing */}
      <div className="absolute top-40 left-0 w-full pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: ['100vw', '-200px', '100vw'],
            y: ['0px', '30px', '0px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
          className="relative"
        >
          <div className="relative">
            {/* Smaller UFO */}
            <div className="w-12 h-6 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full relative shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/50 to-pink-400/50 rounded-full blur-sm" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-4 bg-gradient-to-br from-purple-300 to-pink-400 rounded-t-full opacity-80" />
              <div className="absolute bottom-0 left-1 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
              <div className="absolute bottom-0 right-1 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-100" />
            </div>
            <motion.div
              animate={{
                opacity: [0, 0.2, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-16 bg-gradient-to-b from-purple-400/20 to-transparent opacity-50"
            />
          </div>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Navigation */}
        <header className="border-b border-cyan-800/30 backdrop-blur-sm bg-background/50 sticky top-0 z-50 transition-colors duration-300">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-50" />
                  <img
                    src="/am-logo.svg"
                    alt="ADI MULYADI Logo"
                    className="w-10 h-10 relative z-10"
                  />
                </motion.div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent neon-text">
                  ADI MULYADI
                </h1>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <Button variant="ghost" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 hover:bg-cyan-900/20 border-2 border-transparent hover:border-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 rounded-full">
                  Home
                </Button>
                <Button variant="ghost" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 hover:bg-cyan-900/20 border-2 border-transparent hover:border-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 rounded-full">
                  Works
                </Button>
                <Button variant="ghost" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 hover:bg-cyan-900/20 border border-transparent hover:border-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 rounded-full">
                  About
                </Button>
                <Button variant="ghost" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 hover:bg-cyan-900/20 border border-transparent hover:border-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 rounded-full">
                  Contact
                </Button>
                <ModeToggle />
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="mb-8">
                <motion.img
                  src="/adi-mulyadi-avatar.png"
                  alt="Adi Mulyadi"
                  className="w-32 h-32 mx-auto rounded-full border-4 border-cyan-500 shadow-lg shadow-cyan-500/50 hover:scale-105 transition-transform duration-300"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent neon-text">
                DIGITAL WORDSMITH
              </h2>
              <p className="text-xl md:text-2xl text-cyan-300/80 mb-8 max-w-3xl mx-auto">
                Crafting narratives where technology meets humanity, and stories transcend the boundaries between code and consciousness.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                <Badge variant="outline" className="border-cyan-600 text-cyan-400">
                  <Terminal className="w-3 h-3 mr-1" />
                  Tech Writer
                </Badge>
                <Badge variant="outline" className="border-purple-600 text-purple-400">
                  <Book className="w-3 h-3 mr-1" />
                  Fiction Author
                </Badge>
                <Badge variant="outline" className="border-pink-600 text-pink-400">
                  <Zap className="w-3 h-3 mr-1" />
                  Creative Thinker
                </Badge>
              </div>
              <div className="flex gap-4 justify-center">
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold px-8 w-48 rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none">
                  <FileText className="w-4 h-4 mr-2" />
                  Read My Works
                </Button>
                <Button variant="outline" className="border-2 border-cyan-600 dark:border-cyan-400 text-cyan-400 hover:bg-cyan-900/20 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-500/30 w-48 rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none hover:text-cyan-400 active:!text-white active:!border-white focus:!text-white focus:!border-white active:opacity-100 transition-all duration-300">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              {[
                { label: 'Articles', value: '150+', icon: FileText },
                { label: 'Stories', value: '25', icon: Book },
                { label: 'Awards', value: '8', icon: Award },
                { label: 'Coffee Cups', value: '∞', icon: Coffee }
              ].map((stat, index) => (
                <Card key={index} className="bg-black/50 border-cyan-800/30 backdrop-blur-sm text-center hover:scale-105 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20">
                  <CardContent className="p-6">
                    <stat.icon className="w-10 h-10 mx-auto mb-2 text-cyan-400 rounded-full bg-cyan-900/20 p-2" />
                    <div className="text-2xl font-bold text-cyan-300">{stat.value}</div>
                    <div className="text-sm text-cyan-500">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Works Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                LITERARY ARCHIVE
              </h3>
              <p className="text-cyan-300/70 text-lg">
                Explore my collection of thoughts, stories, and digital narratives
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="mb-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 justify-center mb-6">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeFilter === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(category.id)}
                    className={activeFilter === category.id
                      ? "bg-gradient-to-r from-cyan-900/80 to-purple-900/80 border border-cyan-500 text-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                      : "border-cyan-800 text-cyan-400 hover:bg-cyan-900/20 rounded-full hover:text-cyan-400 active:text-cyan-400 active:opacity-100"
                    }
                  >
                    <category.icon className="w-4 h-4 mr-1" />
                    <span className="text-xs font-medium">{category.label}</span>
                  </Button>
                ))}
              </div>

              {/* Featured Works Highlight */}
              {activeFilter === 'featured' && (
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-300 text-sm font-medium">Featured Works</span>
                  </div>
                </div>
              )}
            </div>

            {/* Works Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorks.map((work, index) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="bg-black/50 border-cyan-800/30 backdrop-blur-sm hover:border-cyan-600/50 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/20 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="outline" className="text-xs border-cyan-700 text-cyan-400">
                          {work.category}
                        </Badge>
                        {work.featured && (
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">
                        {work.title}
                      </h4>
                      <p className="text-cyan-400/70 text-sm mb-4 line-clamp-3">
                        {work.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {work.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-cyan-900/20 text-cyan-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-xs text-cyan-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(work.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2">
                          <Coffee className="w-4 h-4" />
                          {work.readTime}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full mt-4 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/20"
                        onClick={() => setSelectedWork(work)}
                      >
                        Read More <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                ABOUT ME
              </h3>
            </motion.div>
            <Card className="bg-black/50 border-cyan-800/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-300 mb-4">Digital Storyteller</h4>
                    <p className="text-cyan-400/70 leading-relaxed mb-4">
                      I'm a writer who navigates the intersection of technology and human experience.
                      My work explores how artificial intelligence, virtual reality, and digital transformation
                      are reshaping our understanding of consciousness, creativity, and connection.
                    </p>
                    <p className="text-cyan-400/70 leading-relaxed">
                      With a background in computer science and literature, I bring a unique perspective to
                      both technical documentation and creative fiction. My stories often blur the lines between
                      the possible and the imagined, creating narratives that feel both futuristic and deeply human.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-300 mb-4">Expertise Matrix</h4>
                    <div className="space-y-3">
                      {[
                        { skill: 'Technical Writing', level: 95 },
                        { skill: 'Creative Fiction', level: 90 },
                        { skill: 'Digital Marketing', level: 85 },
                        { skill: 'AI & Machine Learning', level: 80 },
                        { skill: 'Poetry & Code', level: 75 }
                      ].map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-cyan-300">{skill.skill}</span>
                            <span className="text-cyan-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-cyan-900/20 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                NEURAL FEEDBACK
              </h3>
              <p className="text-cyan-300/70 text-lg">
                What others say about my work in the digital realm
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="bg-black/50 border-cyan-800/30 backdrop-blur-sm h-full">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-cyan-400/70 mb-4 italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <div className="font-semibold text-cyan-300">{testimonial.name}</div>
                          <div className="text-sm text-cyan-500">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                ESTABLISH CONNECTION
              </h3>
              <p className="text-cyan-300/70 text-lg">
                Let's collaborate on your next digital narrative
              </p>
            </motion.div>
            <Card className="bg-black/50 border-cyan-800/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-300 mb-6">Direct Channels</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-cyan-400" />
                        <span className="text-cyan-300">adi.mulyadi@digitalwriter.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MessageSquare className="w-5 h-5 text-cyan-400" />
                        <span className="text-cyan-300">Available for collaborations</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-300 mb-6">Network Nodes</h4>
                    <div className="flex gap-4">
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" className="border-cyan-600 text-cyan-400 hover:bg-cyan-900/20 rounded-full p-2">
                          <Github className="w-5 h-5" />
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" className="border-cyan-600 text-cyan-400 hover:bg-cyan-900/20 rounded-full p-2">
                          <Twitter className="w-5 h-5" />
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" className="border-cyan-600 text-cyan-400 hover:bg-cyan-900/20 rounded-full p-2">
                          <Linkedin className="w-5 h-5" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-cyan-800/30 backdrop-blur-sm bg-black/50 mt-20">
          <div className="container mx-auto px-4 py-6">
            <div className="text-center text-cyan-500/50 text-sm">
              <p>ADI MULYADI © 2025 • Digital Wordsmith & Story Architect</p>
              <p className="mt-1">Crafting narratives in the age of artificial consciousness</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Work Detail Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black/90 border border-cyan-600 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-cyan-300">{selectedWork.title}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedWork(null)}
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  ×
                </Button>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="outline" className="border-cyan-700 text-cyan-400">
                  {selectedWork.category}
                </Badge>
                <div className="flex items-center gap-2 text-cyan-500">
                  <Calendar className="w-4 h-4" />
                  {new Date(selectedWork.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2 text-cyan-500">
                  <Coffee className="w-4 h-4" />
                  {selectedWork.readTime}
                </div>
              </div>
              <p className="text-cyan-400/70 mb-6">{selectedWork.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedWork.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-cyan-900/20 text-cyan-300">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black">
                Read Full Article
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes grid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}