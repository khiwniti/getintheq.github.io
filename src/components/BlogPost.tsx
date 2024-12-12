import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArrowLeft, ThumbsUp, Send } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

interface Comment {
  id: string
  content: string
  author: string
  date: string
}

interface BlogPost {
  id: string
  title: string
  content: string
  date: string
  likes: number
  comments: Comment[]
  hasLiked?: boolean
}

const BlogPost = () => {
  const { id } = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [comment, setComment] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    const savedPosts = localStorage.getItem('blog-posts')
    if (savedPosts) {
      const posts = JSON.parse(savedPosts)
      const foundPost = posts.find((p: BlogPost) => p.id === id)
      setPost(foundPost)
    }
  }, [id])

  const handleLike = () => {
    if (!post) return

    const updatedPost = {
      ...post,
      likes: post.hasLiked ? post.likes - 1 : post.likes + 1,
      hasLiked: !post.hasLiked
    }
    setPost(updatedPost)

    const savedPosts = localStorage.getItem('blog-posts')
    if (savedPosts) {
      const posts = JSON.parse(savedPosts)
      const updatedPosts = posts.map((p: BlogPost) =>
        p.id === id ? updatedPost : p
      )
      localStorage.setItem('blog-posts', JSON.stringify(updatedPosts))
    }
  }

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!post || !comment.trim() || !author.trim()) return

    const newComment = {
      id: Date.now().toString(),
      content: comment,
      author: author,
      date: new Date().toISOString()
    }

    const updatedPost = {
      ...post,
      comments: [newComment, ...post.comments]
    }
    setPost(updatedPost)

    const savedPosts = localStorage.getItem('blog-posts')
    if (savedPosts) {
      const posts = JSON.parse(savedPosts)
      const updatedPosts = posts.map((p: BlogPost) =>
        p.id === id ? updatedPost : p
      )
      localStorage.setItem('blog-posts', JSON.stringify(updatedPosts))
    }

    setComment('')
    setAuthor('')
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h2>
          <Link 
            to="/blog" 
            className="text-blue-600 hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link 
        to="/blog" 
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to blog
      </Link>
      
      <article className="bg-white rounded-xl shadow-sm p-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center justify-between mb-8">
          <time className="text-gray-500">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 ${
              post.hasLiked ? 'text-blue-600' : 'text-gray-600'
            } hover:text-blue-600 transition-colors`}
          >
            <ThumbsUp size={20} />
            <span>{post.likes}</span>
          </button>
        </div>
        
        <div className="prose">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">Comments ({post.comments.length})</h2>
          
          <form onSubmit={handleComment} className="mb-8">
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="Your name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Send size={20} />
                Send
              </button>
            </div>
          </form>

          <div className="space-y-6">
            {post.comments.map((comment) => (
              <div key={comment.id} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{comment.author}</h3>
                  <time className="text-sm text-gray-500">
                    {new Date(comment.date).toLocaleDateString()}
                  </time>
                </div>
                <p className="text-gray-600">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}

export default BlogPost
