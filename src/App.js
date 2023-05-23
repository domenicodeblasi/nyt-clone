import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Bookmarks from "./pages/Bookmarks"
import { ContextProvider } from "./Context"

function App() {
  return (
    <ContextProvider>
      <Header />
      <main className="flex justify-center w-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </main>
    </ContextProvider>
  );
}

export default App;
