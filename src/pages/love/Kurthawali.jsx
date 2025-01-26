import React, { useState } from "react";
import { Heart, Flower, Star } from "lucide-react";

const Kurthawali = () => {
  const [stage, setStage] = useState("hero");

  const Background = () => (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white/20 rounded-full animate-float"
          style={{
            width: `${Math.random() * 10}px`,
            height: `${Math.random() * 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );

  const renderHeroSection = () => (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-100 to-pink-200 flex flex-col items-center justify-center text-center p-4 overflow-hidden">
      <Background />
      <div className="relative z-10">
        <h1 className="text-5xl font-script text-white drop-shadow-lg mb-6">
          My Kurthawali
        </h1>
        <div className="flex justify-center mb-8">
          <Flower
            color="pink"
            size={200}
            className="animate-pulse text-white drop-shadow-xl"
          />
        </div>
        <button
          onClick={() => setStage("interactive")}
          className="relative px-8 py-4 bg-white text-pink-600 rounded-full font-bold 
          hover:bg-pink-50 transition duration-300 transform hover:scale-105 
          shadow-lg hover:shadow-xl"
        >
          Begin Our Journey
          <span className="absolute -top-2 -right-2 animate-ping w-4 h-4 bg-pink-300 rounded-full"></span>
        </button>
      </div>
    </div>
  );

  const renderInteractiveSection = () => (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-200 to-rose-100 flex flex-col items-center justify-center text-center p-4">
      <Background />
      <div className="relative z-10 space-y-8">
        <h2 className="text-4xl font-script text-white drop-shadow-lg">
          A Secret Waits to be Shared
        </h2>
        <div className="flex space-x-6 justify-center">
          {["Yes", "Absolutely!"].map((text) => (
            <button
              key={text}
              onClick={() => setStage("proposal")}
              className="px-8 py-4 bg-white text-pink-600 rounded-full font-bold 
              hover:bg-pink-50 transition duration-300 transform hover:scale-105 
              shadow-lg hover:shadow-xl"
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProposalSection = () => (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-100 to-pink-200 flex flex-col items-center justify-center text-center p-4">
      <Background />
      <div className="relative z-10 max-w-2xl">
        <p className="text-3xl font-script text-white drop-shadow-lg mb-12">
          My Kurthawali, you've captured my heart completely. I've admired you
          endlessly, and today I want to say— will you make me the happiest by
          being mine?
        </p>
        <div className="flex space-x-6 justify-center">
          <button
            onClick={() => setStage("positiveResponse")}
            className="px-8 py-4 bg-green-500 text-white rounded-full font-bold 
            hover:bg-green-600 transition duration-300 transform hover:scale-105 
            shadow-lg hover:shadow-xl"
          >
            Yes!
          </button>
          <button
            onClick={() => setStage("neutralResponse")}
            className="px-8 py-4 bg-blue-500 text-white rounded-full font-bold 
            hover:bg-blue-600 transition duration-300 transform hover:scale-105 
            shadow-lg hover:shadow-xl"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );

  const renderPositiveResponseSection = () => (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-200 to-rose-100 flex flex-col items-center justify-center text-center p-4">
      <Background />
      <div className="relative z-10 space-y-8">
        <h2 className="text-5xl font-script text-white drop-shadow-lg">
          Our Love Begins
        </h2>
        <p className="text-3xl text-white drop-shadow-md">
          You've made me the happiest person alive!
        </p>
        <div className="flex justify-center space-x-4">
          {[...Array(15)].map((_, i) => (
            <Heart
              key={i}
              color="white"
              size={50}
              className="animate-float"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const renderNeutralResponseSection = () => (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-100 to-pink-200 flex flex-col items-center justify-center text-center p-4">
      <Background />
      <div className="relative z-10 space-y-6">
        <h2 className="text-4xl font-script text-white drop-shadow-lg">
          Thank You for Listening
        </h2>
        <p className="text-2xl text-white drop-shadow-md">
          I'll always wish the best for you.
        </p>
      </div>
    </div>
  );

  return (
    <div className="font-sans">
      <title>A Special Message for My Kurthawali</title>
      {stage === "hero" && renderHeroSection()}
      {stage === "interactive" && renderInteractiveSection()}
      {stage === "proposal" && renderProposalSection()}
      {stage === "positiveResponse" && renderPositiveResponseSection()}
      {stage === "neutralResponse" && renderNeutralResponseSection()}
    </div>
  );
};

export default Kurthawali;
