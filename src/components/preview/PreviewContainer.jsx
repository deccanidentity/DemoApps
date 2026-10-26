import React, { Suspense, useState } from 'react';
import PhoneFrame from './PhoneFrame.jsx';
import EstateMarkPreview from '../../previews/EstateMark/EstateMarkPreview.jsx';
import TapDIDPreview from '../../previews/TapDID/TapDIDPreview.jsx';
import DeccanCompanyPreview from '../../previews/DeccanCompany/DeccanCompanyPreview.jsx';
import IoTPulsePreview from '../../previews/IoTPulse/IoTPulsePreview.jsx';

export default function PreviewContainer({
  app,
  backUrl = '/apps',
  showControls = true,
  showCloseButton = false
}) {
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    setResetKey(prev => prev + 1);
  };

  const renderAppContent = () => {
    if (!app.hasLivePreview) {
      return (
        <div style={{ padding: '24px 16px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#0d0f17' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🚧</div>
          <div style={{ fontWeight: 800, fontSize: '1rem', color: '#fff', marginBottom: '8px' }}>
            {app.name} Prototype
          </div>
          <p style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '16px' }}>
            The interactive browser simulator for this application is currently under engineering compilation.
          </p>
          <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '10px', padding: '10px 14px', fontSize: '0.7rem', color: '#F0A830', border: '1px solid rgba(255,255,255,0.1)' }}>
            Target Stack: {app.techStack?.join(', ') || 'React Native'}
          </div>
        </div>
      );
    }

    switch (app.id) {
      case 'estatemark':
      case 'footmark':
        return <EstateMarkPreview key={resetKey} />;
      case 'tapdid':
        return <TapDIDPreview key={resetKey} />;
      case 'deccan-company':
        return <DeccanCompanyPreview key={resetKey} />;
      case 'iotpulse':
        return <IoTPulsePreview key={resetKey} />;
      default:
        return (
          <div style={{ padding: '20px', textAlign: 'center', color: '#94a3b8' }}>
            App preview not found.
          </div>
        );
    }
  };

  return (
    <PhoneFrame
      appName={app.name}
      onReset={app.hasLivePreview ? handleReset : null}
      backUrl={backUrl}
      showControls={showControls}
      showCloseButton={showCloseButton}
    >
      <Suspense fallback={<div style={{ padding: '20px', color: '#fff', textAlign: 'center' }}>Loading preview...</div>}>
        {renderAppContent()}
      </Suspense>
    </PhoneFrame>
  );
}
