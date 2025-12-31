"use client";
import CarrerGuide from '@/components/carrer-guide'
import Footer from '@/components/footer';
import Hero from '@/components/hero'
import Loading from '@/components/loading'
import ResumeAnalyzer from '@/components/resume-analyzer'
import { useAppData } from '@/context/AppContext'
import React from 'react'

const Home = () => {
  const {loading} = useAppData();

  if(loading) return <Loading/>
  return (
    <>
    <Hero/>
    <CarrerGuide/>
    <ResumeAnalyzer/>
    <Footer/>
    </>
  )
}

export default Home
