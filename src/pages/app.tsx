// src/pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import { TaskProvider } from '../context/TaskContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <TaskProvider>
      <Component {...pageProps} />
    </TaskProvider>
  );
};

export default MyApp;
