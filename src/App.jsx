import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home/Index';
import Library from './pages/Library/Index';
import StyleDetail from './pages/Style/StyleDetail';
import Labs from './pages/Labs/Index';
import Knowledge from './pages/Knowledge/Index';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedStyleId, setSelectedStyleId] = useState('glassmorphism');
  const [labsTab, setLabsTab] = useState('colour');

  // Sync with window scroll on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedStyleId]);

  const handleNavigate = (page, subOption) => {
    setCurrentPage(page);
    if (page === 'labs' && subOption) {
      setLabsTab(subOption);
    }
  };

  const handleSelectStyle = (styleId) => {
    setSelectedStyleId(styleId);
    setCurrentPage('style');
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Universal Top Navigation */}
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content Router */}
      <main style={{ flex: 1 }}>
        {currentPage === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onSelectStyle={handleSelectStyle}
          />
        )}

        {currentPage === 'library' && (
          <div className="content-wrapper">
            <Library
              onSelectStyle={handleSelectStyle}
            />
          </div>
        )}

        {currentPage === 'style' && (
          <StyleDetail
            styleId={selectedStyleId}
            onBack={() => setCurrentPage('library')}
            onSelectOtherStyle={handleSelectStyle}
          />
        )}

        {currentPage === 'labs' && (
          <Labs
            initialTab={labsTab}
          />
        )}

        {currentPage === 'knowledge' && (
          <div className="content-wrapper">
            <Knowledge />
          </div>
        )}
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
