import { ArrowRight } from "lucide-react"

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative w-full max-w-xs p-5 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm backdrop-filter border border-white/20 shadow-2xl overflow-hidden">
   
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
        <div className="absolute inset-0 rounded-3xl shadow-inner"></div>
        
      
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-30 filter blur-3xl"></div>
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-20 filter blur-3xl animate-pulse"></div>
        
      
        <div className="relative text-center font-sfpro z-10">
          <h2 className="text-2xl font-bold text-white ">Welcome back</h2>
          <p className="text-gray-200/30 text-sm mb-6">Sign in to your account</p>
          <div className="mb-4">
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="w-full px-4 pt-4 pb- bg-white/10 border border-white/20 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-teal-500 peer"
              />
              <label
                htmlFor="email"
                className="absolute text-md font-sfpro text-gray-200/60 duration-150 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
              >
                youremail@gmail.com
              </label>
              <button
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-teal-500 hover:bg-teal-600 text-gray-900 rounded-full w-9 h-9 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="space-y-3">
            <button
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center transition duration-200"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>
            <button
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center transition duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Continue with X
            </button>
          </div>
          <p className="mt-6 text-center text-gray-300">
            Don't have an account?{" "}
            <a href="#" className="text-teal-400 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}