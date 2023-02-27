import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase,BsChatSquare } from 'react-icons/bs';
import { Link } from  'react-scroll';

function Nav() {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
        <div className='container mx-auto'>
            <div className='w-full bg-black/20 h-[86px] backdrop-blur-2xl rounded-full max-w-[460px] px-7 mx-auto flex justify-between items-center text-2xl text-red/90'>
                <Link className='cursor-pointer flex w-[60px] h-[60px] items-center justify-center' >
                    <BiHomeAlt />
                </Link>
                <Link  className='cursor-pointer flex w-[60px] h-[60px] items-center justify-center'>
                    <BiUser/>
                </Link>
                <Link className='cursor-pointer flex w-[60px] h-[60px] items-center justify-center'>
                    <BsClipboardData/>
                </Link>
                <Link className='cursor-pointer flex w-[60px] h-[60px] items-center justify-center'>
                    <BsBriefcase/>
                </Link>
                <Link className='cursor-pointer flex w-[60px] h-[60px] items-center justify-center' >
                    <BsChatSquare/>
                </Link>
            </div>
            
        </div>
    </nav>
  )
}

export default Nav
