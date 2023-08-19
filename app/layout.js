import Navbar from '@/app/navbar/navbar'
import './globals.css'
import Provider from '@/Components/Provider'

export const metadata = {
  title: 'Ai App',
  description: 'Best Ai  next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Provider>
        <div className='main'>
          < div className='gradient' />
        </div>
        <main className='app'>
        <Navbar />
        {children}
        </main>
        </Provider>
      </body>
    </html>
  )
}
