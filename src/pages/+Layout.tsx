import React from 'react';
import '../index.css';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}