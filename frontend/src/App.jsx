import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import MyProfilePage from './pages/MyProfilePage'
import CreatePostPage from './pages/CreatePostPage'
import EditPostPage from './pages/EditPostPage'
import './App.css'
import PostDetailPage from './pages/PostDetailPage' // ✅ Import the new PostDetailPage component

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Blog user flow */}
          <Route path="/profile" element={<MyProfilePage />} />
          <Route path="/create" element={<CreatePostPage />} />
          <Route path="/edit/:id" element={<EditPostPage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} /> {/* ✅ New route */}
        </Routes>

      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
