import React from "react";
import { Analytics } from "@vercel/analytics/react"
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import PlayerProfile from "./pages/PlayerProfile";
import NotFound from "./pages/NotFound";
import LogIn from "./pages/LogIn";
import Blog from "./pages/Blog";
import CreatePost from "./pages/CreatePost";
import Wrapper from "./components/Wrapper";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <div className="app-container">
      <Analytics />
      <Header />
      <main className="main-content container min-vh-100 py-5
">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/player/:playerId" element={<PlayerProfile />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/blog/:blogId" element={<BlogPost />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/create" element={
            <Wrapper>
              <CreatePost />
            </Wrapper>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
