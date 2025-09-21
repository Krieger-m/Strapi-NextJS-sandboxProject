'use client';
import { PropsWithChildren } from 'react';
import { CacheProvider } from '@emotion/react';
import { createEmotionCache } from '@/utils/createEmotionCache';

export default function EmotionProviderClient({ children }: PropsWithChildren) {
  const cache = createEmotionCache();
  return <CacheProvider value={cache}>{children}</CacheProvider>;
}