import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { appsData, PLATFORMS } from '../data/apps.js';
import AppCard from '../components/apps/AppCard.jsx';
import CategoryPills from '../components/apps/CategoryPills.jsx';

export default function ExploreApps() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'all';

  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured'); // 'featured' | 'rating' | 'name'

  // Sync category changes with URL search param
  const handleCategorySelect = (catId) => {
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  const filteredApps = useMemo(() => {
    return appsData
      .filter(app => {
        // Category filter
        if (selectedCategory !== 'all' && app.category !== selectedCategory) {
          return false;
        }

        // Platform filter
        if (selectedPlatform !== 'all') {
          const matchPlatform = app.platforms.some(p =>
            p.toLowerCase().replace(/[\s-]/g, '') === selectedPlatform.toLowerCase().replace(/[\s-]/g, '')
          );
          if (!matchPlatform) return false;
        }

        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = app.name.toLowerCase().includes(q);
          const matchDesc = app.shortDescription.toLowerCase().includes(q);
          const matchCategory = app.categoryName.toLowerCase().includes(q);
          const matchTech = app.techStack?.some(t => t.toLowerCase().includes(q));
          if (!matchName && !matchDesc && !matchCategory && !matchTech) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'featured') {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.rating - a.rating;
        }
        if (sortBy === 'rating') {
          return b.rating - a.rating;
        }
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        }
        return 0;
      });
  }, [selectedCategory, selectedPlatform, searchQuery, sortBy]);

  const resetAllFilters = () => {
    setSelectedPlatform('all');
    setSearchQuery('');
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <main style={{ paddingTop: 'calc(var(--nav-height) + 20px)', minHeight: '80vh' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <div className="section-tag">Showcase Catalog</div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '12px' }}>
            Explore Mobile Applications
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', fontSize: '1.05rem' }}>
            Browse our complete catalog of iOS, Android, and cross-platform enterprise solutions. Test live prototypes or inspect technical specifications.
          </p>
        </div>

        {/* Category Pills */}
        <CategoryPills
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />

        {/* Filter and Search Bar */}
        <div className="filter-bar">
          {/* Search Input */}
          <div className="search-input-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search by app name, keywords, or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search mobile applications"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: '0.85rem' }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Platform Filter Buttons */}
          <div className="platform-filter-group">
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginRight: '4px' }}>Platform:</span>
            {PLATFORMS.map(p => (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedPlatform(p.id)}
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  background: selectedPlatform === p.id ? 'var(--brand-gold)' : 'var(--bg-elevated)',
                  color: selectedPlatform === p.id ? '#000' : 'var(--text-secondary)',
                  border: '1px solid var(--border)'
                }}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Sort By Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '6px 12px',
                borderRadius: 'var(--radius-pill)',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
                fontSize: '0.8rem',
                fontWeight: 600,
                outline: 'none'
              }}
              aria-label="Sort apps by"
            >
              <option value="featured">Featured First</option>
              <option value="rating">Highest Rated</option>
              <option value="name">App Name (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Result Counter & Active Filters Display */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <div>
            Showing <strong style={{ color: 'var(--text-primary)' }}>{filteredApps.length}</strong> of {appsData.length} applications
          </div>
          {(selectedCategory !== 'all' || selectedPlatform !== 'all' || searchQuery) && (
            <button
              type="button"
              onClick={resetAllFilters}
              style={{ color: 'var(--brand-gold-light)', fontWeight: 600, textDecoration: 'underline' }}
            >
              Clear All Filters
            </button>
          )}
        </div>

        {/* Apps Grid */}
        {filteredApps.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '60px'
            }}
          >
            {filteredApps.map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              background: 'var(--bg-surface)',
              border: '1px dashed var(--border)',
              borderRadius: 'var(--radius-xl)',
              marginBottom: '60px'
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📱</div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>No Mobile Applications Found</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '460px', margin: '0 auto 24px', fontSize: '0.95rem' }}>
              We couldn't find any mobile apps matching your current filter criteria: "{searchQuery}". Try searching for another term or clear active filters.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={resetAllFilters}
            >
              Reset Filters & Show All
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
