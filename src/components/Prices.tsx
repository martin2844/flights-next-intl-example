import { getTranslations } from "next-intl/server"

export default async function Prices() {
    const t = await getTranslations('Prices');
    return (
        <div>
            <h2 style={{ borderBottom: '1px solid #808080', paddingBottom: '5px' }}>{t('title')}</h2>
            <ul style={{ paddingLeft: '20px' }}>
                <li>{t('tip')}</li>
                <li>{t('tip2')}</li>
                <li>{t('tip3')}</li>
                <li>{t('tip4')}</li>
                <li>{t('tip5')}</li>
            </ul>
            <div style={{
                border: '2px solid #808080',
                padding: '10px',
                backgroundColor: '#f0f0f0',
                marginTop: '20px',
            }}>
                <h3 style={{ margin: '0 0 10px 0' }}>{t('subtitle')}</h3>
                <p style={{ margin: '0 0 5px 0' }}>{t('subtip')}</p>
                <p style={{ fontSize: '12px', margin: 0 }}>{t('subtip2')}</p>
            </div>
        </div>
    )
}

