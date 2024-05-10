import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Globalsphere Connect</h1>
      <p className="text-lg mb-6">
        Welcome to Globalsphere Connect, your ultimate destination for worldwide news, weather updates, and social networking. We aim to connect people from all corners of the globe, providing a platform to share, discuss, and stay informed about global events and weather conditions.
      </p>
      <h2 className="text-xl font-bold mb-2">Features:</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">Access to Worldwide News: Stay up-to-date with the latest news from around the world.</li>
        <li className="mb-2">Global Weather Updates: Get real-time weather forecasts and conditions for any location globally.</li>
        <li className="mb-2">Social Networking: Connect with users worldwide, share posts, and engage in discussions.</li>
        <li className="mb-2">Post Sharing: Share your thoughts, experiences, and news articles with the global community.</li>
        <li>Connect with Others: Forge connections with like-minded individuals from diverse backgrounds and cultures.</li>
      </ul>
      <p className="text-lg">
        Join Globalsphere Connect today and become part of a global community where boundaries fade, and connections thrive!
      </p>
    </div>
  );
}
