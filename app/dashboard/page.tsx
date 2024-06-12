"use client"
import React, { useEffect } from 'react'
import Layout from '@/components/shared/layout'
import { useRouter } from 'next/navigation';

export default function page() {
  const router = useRouter();
  useEffect(()=>{
    router.push("dashboard/pricing");
  },[])
  return (
    <Layout >
        <h2>Welcome to the Home Page</h2>
        <p>This is the home page content.</p>
    </Layout>
  )
}
