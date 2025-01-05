import Header from './Header'
import Footer from './Footer'

export default function PageTemplate({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{
                flex: 1,
                backgroundColor: '#ffffff',
                border: '2px solid #808080',
                padding: '10px',
                margin: '10px',
            }}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

