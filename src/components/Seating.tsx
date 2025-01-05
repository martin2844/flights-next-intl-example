import { getTranslations } from "next-intl/server"

export default async function Seating() {
    const t = await getTranslations('Seating');
    return (
        <div>
            <h2 style={{ borderBottom: '1px solid #808080', paddingBottom: '5px' }}>{t('title')}</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                <thead>
                    <tr style={{ backgroundColor: '#d3d3d3' }}>
                        <th style={{ border: '1px solid #808080', padding: '5px', textAlign: 'left' }}>{t('seatType')}</th>
                        <th style={{ border: '1px solid #808080', padding: '5px', textAlign: 'left' }}>{t('pros')}</th>
                        <th style={{ border: '1px solid #808080', padding: '5px', textAlign: 'left' }}>{t('cons')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid #808080', padding: '5px' }}>{t('window.name')}</td>
                        <td style={{ border: '1px solid #808080', padding: '5px' }}>{t('window.pros')}</td>
                        <td style={{ border: '1px solid #808080', padding: '5px' }}>{t('window.cons')}</td>
                    </tr>
                    <tr style={{ backgroundColor: '#f0f0f0' }}>
                        <td style={{ border: '1px solid #808080', padding: '5px' }}>{t('aisle.name')}</td>
                        <td style={{ border: '1px solid #808080', padding: '5px' }}>{t('aisle.pros')}</td>
                        <td style={{ border: '1px solid #808080', padding: '5px' }}>{t('aisle.cons')}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #808080', padding: '5px' }}>{t('middle.name')}</td>
                        <td style={{ border: '1px solid #808080', padding: '5px' }}>{t('middle.pros')}</td>
                        <td style={{ border: '1px solid #808080', padding: '5px' }}>{t('middle.cons')}</td>
                    </tr>
                </tbody>
            </table>
            <p style={{ marginTop: '20px', fontWeight: 'bold' }}>
                {t('tip')}
            </p>
        </div>
    )
}

