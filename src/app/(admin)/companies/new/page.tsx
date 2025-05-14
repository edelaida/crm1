'use client';

import React from 'react';
import CompanyForm from '@/app/components/company-form';

export interface PageProps {
  property: boolean;
}

export default function Page({}: PageProps) {
  return (
    <div className="py-6 px-10">
      <CompanyForm />
    </div>
  );
}