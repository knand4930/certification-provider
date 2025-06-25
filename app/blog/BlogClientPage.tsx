"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"
import { CertificationShowcase } from "@/components/certification-showcase"
import {
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Shield,
  BookOpen,
  Clock,
  Eye,
  MessageSquare,
  Download,
  Share2,
  Users,
} from "lucide-react"

export default function BlogClientPage() {
  const featuredPost = {
    title: "ISO 27001:2022 - Key Changes and Implementation Strategies for 2024",
    excerpt:
      "Comprehensive guide to the latest ISO 27001 updates and how organizations can successfully transition to the new requirements while maintaining robust information security.",
    author: "Dr. Sarah Mitchell, CISO",
    authorRole: "Chief Information Security Officer",
    date: "March 18, 2024",
    readTime: "12 min read",
    category: "Information Security",
    image: "/placeholder.svg?height=400&width=600",
    views: "3.2K",
    comments: 28,
    tags: ["ISO 27001", "Information Security", "Compliance", "Risk Management"],
    featured: true,
  }

  const blogPosts = [
    {
      title: "Quality Management Revolution: How AI is Transforming ISO 9001 Implementation",
      excerpt:
        "Explore how artificial intelligence and automation are revolutionizing quality management systems, making ISO 9001 implementation more efficient and effective than ever before.",
      author: "Michael Chen, CTO",
      authorRole: "Chief Technology Officer",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Quality Management",
      image: "/placeholder.svg?height=300&width=400",
      views: "2.8K",
      comments: 22,
      tags: ["ISO 9001", "AI", "Quality Management", "Digital Transformation"],
      trending: true,
    },
    {
      title: "Sustainability Certification: Your Complete Guide to ISO 14001 Success",
      excerpt:
        "Step-by-step roadmap for implementing environmental management systems that not only achieve certification but drive real environmental impact and cost savings.",
      author: "Emma Rodriguez, Environmental Expert",
      authorRole: "Head of Environmental Compliance",
      date: "March 12, 2024",
      readTime: "10 min read",
      category: "Environmental Management",
      image: "/placeholder.svg?height=300&width=400",
      views: "2.1K",
      comments: 18,
      tags: ["ISO 14001", "Sustainability", "Environmental Management", "Green Business"],
    },
    {
      title: "Workplace Safety Excellence: ISO 45001 Implementation Best Practices",
      excerpt:
        "Learn from industry leaders how to build a world-class occupational health and safety management system that protects employees and enhances organizational performance.",
      author: "David Kim, Safety Director",
      authorRole: "Head of Occupational Safety",
      date: "March 10, 2024",
      readTime: "9 min read",
      category: "Occupational Safety",
      image: "/placeholder.svg?height=300&width=400",
      views: "1.9K",
      comments: 15,
      tags: ["ISO 45001", "Workplace Safety", "Risk Management", "Employee Wellbeing"],
    },
    {
      title: "Digital Transformation in Healthcare: ISO 13485 for Medical Device Innovation",
      excerpt:
        "How leading medical device companies are leveraging ISO 13485 to accelerate innovation while maintaining the highest quality and safety standards.",
      author: "Dr. Lisa Wang, Healthcare Specialist",
      authorRole: "Healthcare Certification Director",
      date: "March 8, 2024",
      readTime: "11 min read",
      category: "Healthcare",
      image: "/placeholder.svg?height=300&width=400",
      views: "2.5K",
      comments: 31,
      tags: ["ISO 13485", "Healthcare", "Medical Devices", "Innovation"],
    },
    {
      title: "Supply Chain Resilience: Building Robust Systems with ISO 28000",
      excerpt:
        "Essential strategies for creating resilient supply chains that can withstand global disruptions while maintaining security and efficiency standards.",
      author: "James Thompson, Supply Chain Expert",
      authorRole: "Supply Chain Security Specialist",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Supply Chain",
      image: "/placeholder.svg?height=300&width=400",
      views: "1.7K",
      comments: 19,
      tags: ["ISO 28000", "Supply Chain", "Security", "Risk Management"],
    },
    {
      title: "Career Acceleration Through Professional Certification: 2024 Success Guide",
      excerpt:
        "Data-driven insights on how professional certifications are transforming careers, with real success stories and strategic advice for maximum impact.",
      author: "Rachel Green, Career Development Lead",
      authorRole: "Professional Development Manager",
      date: "March 3, 2024",
      readTime: "6 min read",
      category: "Career Development",
      image: "/placeholder.svg?height=300&width=400",
      views: "3.1K",
      comments: 42,
      tags: ["Professional Development", "Career Growth", "Certification ROI", "Skills Development"],
    },
  ]

  const categories = [
    {
      name: "Quality Management",
      count: 28,
      color: "bg-emerald-100 text-emerald-700",
      description: "ISO 9001, TQM, Process Improvement",
    },
    {
      name: "Information Security",
      count: 24,
      color: "bg-blue-100 text-blue-700",
      description: "ISO 27001, Cybersecurity, Data Protection",
    },
    {
      name: "Environmental Management",
      count: 19,
      color: "bg-green-100 text-green-700",
      description: "ISO 14001, Sustainability, Carbon Management",
    },
    {
      name: "Occupational Safety",
      count: 16,
      color: "bg-red-100 text-red-700",
      description: "ISO 45001, Workplace Safety, Risk Assessment",
    },
    {
      name: "Healthcare",
      count: 14,
      color: "bg-purple-100 text-purple-700",
      description: "ISO 13485, Medical Devices, Healthcare Quality",
    },
    {
      name: "Career Development",
      count: 12,
      color: "bg-orange-100 text-orange-700",
      description: "Professional Growth, Skills, Training",
    },
  ]

  const trendingTopics = [
    { topic: "AI in Quality Management", posts: 8 },
    { topic: "ISO 27001:2022 Updates", posts: 12 },
    { topic: "Sustainability Certifications", posts: 15 },
    { topic: "Remote Audit Practices", posts: 6 },
    { topic: "Digital Transformation", posts: 10 },
    { topic: "Supply Chain Security", posts: 7 },
  ]

  const expertAuthors = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Information Security Officer",
      expertise: "Information Security, Risk Management",
      articles: 24,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      expertise: "Digital Innovation, Quality Systems",
      articles: 18,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emma Rodriguez",
      role: "Environmental Compliance Head",
      expertise: "Environmental Management, Sustainability",
      articles: 16,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-emerald-100 text-emerald-700">CertifyPro Global Expert Insights</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Industry Insights & Certification Excellence
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stay ahead with expert insights, industry trends, and practical guidance from CertifyPro Global's
              certification specialists. Empowering your success through knowledge and expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>500+ Expert Articles</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>50+ Industry Experts</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>Weekly Updates</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <Badge className="mb-4 bg-emerald-100 text-emerald-700">Featured Article</Badge>
                <h2 className="text-4xl font-bold text-gray-800">Editor's Choice</h2>
              </div>
              <Badge className="bg-red-100 text-red-700 px-4 py-2">🔥 Trending</Badge>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-200 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-emerald-100 to-teal-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="w-24 h-24 text-emerald-600" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-emerald-500 text-white">{featuredPost.category}</Badge>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button size="sm" variant="outline" className="bg-white/80">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/80">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredPost.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl text-gray-800 mb-4 leading-tight">
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div>
                          <span className="font-medium">{featuredPost.author}</span>
                          <p className="text-xs text-gray-400">{featuredPost.authorRole}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{featuredPost.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>{featuredPost.comments}</span>
                        </div>
                      </div>
                      <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                        Read Full Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid & Sidebar */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Latest Expert Insights</h2>
                <p className="text-gray-600">
                  Industry-leading content from our certified specialists and thought leaders
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Card className="h-full bg-white/80 backdrop-blur-sm border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg overflow-hidden">
                      <div className="relative h-48 bg-gradient-to-br from-emerald-100 to-teal-100">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <BookOpen className="w-12 h-12 text-emerald-600" />
                        </div>
                        <Badge className="absolute top-3 left-3 bg-white/90 text-emerald-600 text-xs">
                          {post.category}
                        </Badge>
                        {post.trending && (
                          <Badge className="absolute top-3 right-3 bg-red-500 text-white text-xs">🔥 Trending</Badge>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <div className="flex flex-wrap gap-1 mb-3">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <CardTitle className="text-lg text-gray-800 mb-3 leading-tight line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                          <div className="flex items-center space-x-1">
                            <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                              <User className="w-3 h-3 text-emerald-600" />
                            </div>
                            <div>
                              <span className="font-medium">{post.author}</span>
                              <p className="text-xs text-gray-400">{post.authorRole}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 text-xs text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Eye className="w-3 h-3" />
                              <span>{post.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageSquare className="w-3 h-3" />
                              <span>{post.comments}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                          >
                            Read More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Button variant="outline" className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 px-8 py-3">
                  Load More Articles
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Expert Authors */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-emerald-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-800">Expert Authors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {expertAuthors.map((author, index) => (
                        <motion.div
                          key={author.name}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer"
                        >
                          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {author.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 text-sm">{author.name}</h4>
                            <p className="text-xs text-gray-600">{author.role}</p>
                            <p className="text-xs text-emerald-600">{author.articles} articles</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-emerald-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-800">Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {categories.map((category, index) => (
                        <motion.div
                          key={category.name}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer"
                        >
                          <div className="flex-1">
                            <span className="text-gray-700 font-medium">{category.name}</span>
                            <p className="text-xs text-gray-500">{category.description}</p>
                          </div>
                          <Badge className={category.color}>{category.count}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Trending Topics */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-emerald-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-800 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-emerald-600" />
                      Trending Topics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {trendingTopics.map((topic, index) => (
                        <motion.div
                          key={topic.topic}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer text-gray-700 hover:text-emerald-600"
                        >
                          <span className="text-sm">#{topic.topic}</span>
                          <Badge variant="outline" className="text-xs">
                            {topic.posts}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
                    <p className="opacity-90 mb-4 text-sm">
                      Get the latest certification insights, industry updates, and expert tips delivered weekly.
                    </p>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-emerald-600 w-full mb-3"
                    >
                      Subscribe to Newsletter
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <p className="text-xs opacity-80">Join 25,000+ professionals</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Showcase */}
      <CertificationShowcase />

      {/* FAQ Section */}
      <FAQSection
        title="Blog & Resources - FAQ"
        subtitle="Find answers to common questions about our content and certification insights"
        faqs={[
          {
            question: "How often does CertifyPro Global publish new content?",
            answer:
              "We publish 3-4 new expert articles weekly, covering the latest certification trends, industry insights, implementation guides, and success stories from our certified professionals and industry specialists.",
          },
          {
            question: "Can I contribute articles or insights to the CertifyPro Global blog?",
            answer:
              "Yes! We welcome guest contributions from certified professionals, industry experts, and thought leaders. Please contact our editorial team with your article proposal, credentials, and expertise areas.",
          },
          {
            question: "Are the blog articles written by certified professionals?",
            answer:
              "All our articles are authored by certified industry experts, lead auditors, and senior consultants with extensive experience. Each author's credentials and expertise are clearly displayed with their content.",
          },
          {
            question: "Can I use blog content for training or educational purposes?",
            answer:
              "Our blog content can be referenced for educational purposes with proper attribution to CertifyPro Global. For commercial use, republishing, or training materials, please contact us for licensing permissions.",
          },
          {
            question: "Do you offer downloadable resources and implementation guides?",
            answer:
              "Yes, we regularly publish downloadable guides, templates, checklists, and whitepapers that complement our blog content. These resources are available to registered users and newsletter subscribers.",
          },
          {
            question: "How can I stay updated with new articles and industry insights?",
            answer:
              "Subscribe to our newsletter for weekly updates, follow us on social media, or use our RSS feed. You can also set up category-specific notifications for topics most relevant to your industry.",
          },
        ]}
      />

      <Footer />
    </div>
  )
}
