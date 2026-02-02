'use client';

import { useState } from 'react';
import BrandReveal from '@/components/BrandReveal';
import CampusDashboard from '@/components/campus/CampusDashboard';

export default function Home() {
  // This state controls which component is visible
  const [showCampus, setShowCampus] = useState(false);

  return (
    <main>
      {!showCampus ? (
        /* We pass the setShowCampus function into the onEnter prop */
        <BrandReveal onEnter={() => setShowCampus(true)} />
      ) : (
        <CampusDashboard />
      )}
    </main>
  );
}