"use client";
import React from 'react'
import { Button } from '../ui/button'
import { activatePlan } from '@/app/actions/actions';

export default function ActivatePlanButton() {
    
   
  return (
    <div>
        <Button
      onClick={() => activatePlan()}
    >
      Activate Plan
    </Button>
    </div>
  )
}
