import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Bookmarks from "./pages/Bookmarks"
import { ScreenContextProvider } from "./context/ScreenContext"
import { DataContextProvider } from "./context/DataContext"
import { CarouselContextProvider } from "./context/CarouselContext"

function App() {
  return (
    <ScreenContextProvider>
      <DataContextProvider>
        <CarouselContextProvider>
          <Header />
          <main className="flex justify-center w-[100dvw]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
            </Routes>
          </main>
        </CarouselContextProvider>
      </DataContextProvider>
    </ScreenContextProvider>
  );
}

export default App;
