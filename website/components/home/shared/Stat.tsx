'use client';

import React from 'react';
import { useCounter } from '@/hooks/useCounter';

interface Props {
  value: number;
  suffix: string;
  label: string;
}

export function Stat({ value, suffix, label }: Props) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="reveal-scale" style={{ textAlign: 'center' }}>
      <div className="stat-num">{count}{suffix}</div>
      <div className="label-xs" style={{ marginTop: '.35rem' }}>{label}</div>
    </div>
  );
}