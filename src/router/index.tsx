import React from 'react';
import { BrowserRouter } from 'react-router-dom';

type RouterProps = {
  children: React.ReactNode;
};

export const RouterContainer = ({ children }: RouterProps) => (
  <div className="flex justify-center items-center bg-[#090707] min-h-screen">
    <BrowserRouter>{children}</BrowserRouter>
  </div>
);