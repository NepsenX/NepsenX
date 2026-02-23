import React, { useState } from "react";
import Intro from "./components/Intro";
import Login from "./components/Login";
import Studio from "./components/Studio";
import Ads from "./components/Ads";

function App() {
  const [view, setView] = useState<"intro" | "login" | "studio">("intro");

  const handleIntroComplete = () => {
    // Check if already logged in
    if (localStorage.getItem("userLoggedIn") === "true") {
      setView("studio");
    } else {
      setView("login");
    }
  };

  const handleLogin = () => {
    setView("studio");
  };

  return (
    <>
      <Ads onClose={() => {}} />
      {view === "intro" && <Intro onComplete={handleIntroComplete} />}
      {view === "login" && <Login onLogin={handleLogin} />}
      {view === "studio" && <Studio />}
    </>
  );
}

export default App;
