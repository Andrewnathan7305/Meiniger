"use client";

import { useState, useEffect } from "react";
import Home from "@/components/Home";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Clients from "@/components/Clients";
import Projects from "@/components/Projects";

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Initialize activeTab based on current URL
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/about') setActiveTab('about');
    else if (path === '/services') setActiveTab('services');
    else if (path === '/projects') setActiveTab('projects');
    else if (path === '/team') setActiveTab('team');
    else if (path === '/contact') setActiveTab('contact');
    else setActiveTab('home');
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/about') setActiveTab('about');
      else if (path === '/services') setActiveTab('services');
      else if (path === '/projects') setActiveTab('projects');
      else if (path === '/team') setActiveTab('team');
      else if (path === '/contact') setActiveTab('contact');
      else setActiveTab('home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Get navigation function from window (passed from layout)
  const handleNavigation = (tab) => {
    // Dispatch custom event to be caught by layout
    window.dispatchEvent(new CustomEvent('navigate', { detail: tab }));
  };

  const renderActiveSection = () => {
    switch(activeTab) {
      case 'about':
        return <About onNavigate={handleNavigation} />;
      case 'services':
        return <Services onNavigate={handleNavigation} />;
      case 'projects':
        return <Projects activeTab={activeTab} onNavigate={handleNavigation} />;
      case 'team':
        return <Team onNavigate={handleNavigation} />;
      case 'home':
      default:
        return (
          <>
            <Home onNavigate={handleNavigation} />
            <Clients />
          </>
        );
    }
  };

  return renderActiveSection();
}
