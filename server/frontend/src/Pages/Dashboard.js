import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/NavBar/Navbar'

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="w-5/6 mx-auto">
      </div>
      <div className="sticky top-[100vh]">
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard