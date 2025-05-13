import React from 'react';
import { BrowserRouter } from 'react-router-dom';

type RouterProps = {
  children: React.ReactNode;
};

export const RouterContainer = ({ children }: RouterProps) => (
  <div className="flex justify-center items-center bg-[#1a202c] p-8">
    <BrowserRouter>{children}</BrowserRouter>
  </div>
);
