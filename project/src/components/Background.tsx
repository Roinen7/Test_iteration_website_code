import React from 'react';

export default function Background(): JSX.Element {
  return (
    <>
      <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 -z-10 pointer-events-none bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="fixed bottom-1/4 right-1/4 w-96 h-96 -z-10 pointer-events-none bg-pink-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>
    </>
  );
}
