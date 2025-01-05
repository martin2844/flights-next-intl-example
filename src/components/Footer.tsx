import { getTranslations } from "next-intl/server"

export default async function Footer() {
    const t = await getTranslations('Footer');
    return (
        <footer style={{
            textAlign: 'center',
            marginTop: '20px',
            borderTop: '2px solid #808080',
            paddingTop: '10px',
            fontSize: '12px',
        }}>
            <p>{t('copyright')}</p>
        </footer>
    )
}

