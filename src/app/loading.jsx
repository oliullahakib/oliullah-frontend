import logo from '../assets/icons/logo.png'
import Image from 'next/image'
const loading = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-black'>
        <Image className='animate-ping' src={logo} alt="logo" />
    </div>
  )
}

export default loading