import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';


export const metadata: Metadata = {
  title: 'Flight Tips',
  description: 'Get the best tips for your flight',
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: any
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang="en">
      <body style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#c0c0c0',
        color: '#000000',
        margin: 0,
        padding: 0,
      }}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

