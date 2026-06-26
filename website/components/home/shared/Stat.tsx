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
    <div ref={ref} style={{ textAlign: 'center', opacity: 1, transform: 'none' }}>
      <div className="stat-num">{count}{suffix}</div>
      <div className="label-xs" style={{ marginTop: '.35rem', color: '#888' }}>{label}</div>
    </div>
  );
}
