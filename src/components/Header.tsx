'use client'

import Image from 'next/image'
import { Link, usePathname } from "@/i18n/routing"
import { useTranslations } from "next-intl"

export default function Header() {
    const t = useTranslations('Header');
    const pathname = usePathname();

    return (
        <header>
            <div style={{
                backgroundColor: '#000080',
                color: '#ffffff',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
            }}>
                <Image
                    src="/plane.svg"
                    alt={t('altText')}
                    width={40}
                    height={40}
                    style={{ marginRight: '10px' }}
                />
                <h1 style={{ margin: 0, fontSize: '24px' }}>{t('title')}</h1>
            </div>
            <nav style={{
                backgroundColor: '#c0c0c0',
                padding: '5px 10px',
                borderBottom: '2px solid #808080',
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <div>
                    <Link href="/" style={linkStyle}>{t('nav.seating')}</Link>
                    <Link href="/prices" style={linkStyle}>{t('nav.prices')}</Link>
                    <Link href="/upgrades" style={linkStyle}>{t('nav.upgrades')}</Link>
                </div>
                <div>
                    <Link href={pathname} locale="en" style={langStyle}>EN</Link>
                    <Link href={pathname} locale="es" style={langStyle}>ES</Link>
                </div>
            </nav>
        </header>
    )
}

const linkStyle = {
    padding: '5px 10px',
    marginRight: '5px',
    border: '2px solid #808080',
    backgroundColor: '#c0c0c0',
    color: '#000000',
    textDecoration: 'none',
}

const langStyle = {
    ...linkStyle,
    padding: '2px 5px',
    fontSize: '12px',
    marginRight: '2px',
}

