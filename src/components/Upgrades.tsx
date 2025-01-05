import { getTranslations } from "next-intl/server"

export default async function Upgrades() {
    const t = await getTranslations('Upgrades');
    return (
        <div>
            <h2 style={{ borderBottom: '1px solid #808080', paddingBottom: '5px' }}>{t('title')}</h2>
            <ol style={{ paddingLeft: '20px' }}>
                <li>{t('tip1')}</li>
                <li>{t('tip2')}</li>
                <li>{t('tip3')}</li>
                <li>{t('tip4')}</li>
                <li>{t('tip5')}</li>
            </ol>
            <div style={{
                border: '2px solid #808080',
                padding: '10px',
                backgroundColor: '#f0f0f0',
                marginTop: '20px',
            }}>
                <h3 style={{ margin: '0 0 10px 0' }}>{t('calculator.title')}</h3>
                <p style={{ margin: '0 0 10px 0' }}>{t('calculator.description')}</p>
                <form style={{ display: 'flex', gap: '10px' }}>
                    <input
                        type="text"
                        placeholder={t('calculator.flightNumber')}
                        style={{
                            border: '2px inset #808080',
                            padding: '2px 5px',
                        }}
                    />
                    <input type="date" style={{
                        border: '2px inset #808080',
                        padding: '2px 5px',
                    }} />
                    <button type="submit" style={{
                        border: '2px outset #808080',
                        padding: '2px 10px',
                        backgroundColor: '#c0c0c0',
                        cursor: 'pointer',
                    }}>
                        {t('calculator.calculate')}
                    </button>
                </form>
            </div>
        </div>
    )
}

