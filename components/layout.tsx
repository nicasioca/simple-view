import Login from './login'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }: { children: any }) {
  return (
    <div>
      <Navbar />
      <div className="container my-24 px-6 mx-auto">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {children}
      </main>
      </div>
      <Footer />
    </div>
  )
}