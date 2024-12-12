import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import toast from 'react-hot-toast'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/getintheQ',
      icon: <Github size={20} />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/getintheq',
      icon: <Linkedin size={20} />
    }
  ]
  
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const email = new FormData(form).get('email') as string

    // Store subscription in localStorage
    const subscriptions = JSON.parse(localStorage.getItem('newsletter-subscriptions') || '[]')
    subscriptions.push({
      email,
      date: new Date().toISOString()
    })
    localStorage.setItem('newsletter-subscriptions', JSON.stringify(subscriptions))

    // Show success message with notification about the admin email
    toast.success(
      <div>
        <p>🎉 Welcome aboard! You're now subscribed to our newsletter.</p>
      </div>,
      {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#10B981',
          color: '#FFFFFF',
          padding: '16px',
        },
      }
    )

    // Send notification to admin (simulated)
    console.log(`New subscription notification sent to info@getintheq.io:\nSubscriber: ${email}\nDate: ${new Date().toLocaleString()}`)
    
    form.reset()
  }

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:khiwn@getintheq.io"
                  className="text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group"
                >
                  <Mail size={20} className="group-hover:text-blue-600" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    khiwn@getintheq.io
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+66123456789"
                  className="text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group"
                >
                  <Phone size={20} className="group-hover:text-blue-600" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    +66 82 997 1887
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-600 group">
                <MapPin size={20} className="flex-shrink-0 mt-1 group-hover:text-blue-600" />
                <span className="group-hover:translate-x-1 transition-transform">
                  Bangkok, Thailand
                </span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to my newsletter for the latest updates on technology, AI, and engineering.            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group"
              >
                <Mail size={20} className="group-hover:rotate-12 transition-transform" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-600">
            © {currentYear} Khiw (Ikkyu) Nitithadachot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
