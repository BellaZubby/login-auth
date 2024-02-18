import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let username = sessionStorage.getItem('username');
    if (username === "" || username === null) {
      navigate('/login');
    }
  }, []);
  
  return (
    <section>
      <div className='bg-white h-screen w-full flex flex-col items-center justify-center'>

        <h1 className='font-montserrat text-4xl font-bold text-primary-20'>WELCOME</h1>
        <div className='flex gap-3 mt-6'>
          <button className='font-poppins w-32 border border-gray-400 rounded-full p-2 font-bold bg-[#D5D5D5]'>LEARN MORE</button>
          <Link to={'/login'} className='font-poppins w-32 border border-transparent rounded-full p-2 text-center font-bold  bg-red-600 text-[#FFFFFF]'>LOGOUT</Link>
        </div>
      </div>
    </section>
  )
}

export default Landing
