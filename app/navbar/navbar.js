'use client'
import Image from 'next/image';
import Link from 'next/link';
import { singOut, signIn, getProviders, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const isUserLogin = true
    const [providers, setProviders] = useState(null)
    const [toggleDrop, setToggleDrop] = useState(false)
    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();
            setProviders(response)
        }
        setProviders();
    }, [])
    return (
        <div className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex--center'>
                <Image src={'https://i.ibb.co/jZrPF8p/kar-rakib-1.jpg'}
                    width={30} height={30} className='object-contain' />
                <p className='logo_text'>Kar-Rakib</p>
            </Link>
            {/* navigation */}
            <div className='sm:flex hidden'>
                {isUserLogin ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href='/create-prompt'>
                            Create Post
                        </Link>
                        <button type='button' onClick={singOut} className='outline_btn'>
                            Sign Out
                        </button>
                        <Link href='/profile'>
                            <Image
                                src='https://i.ibb.co/jZrPF8p/kar-rakib-1.jpg'
                                height={30}
                                width={30}
                                alt='too'
                                className='rounded-full'
                            />
                        </Link>
                    </div>
                ) : <>
                    {
                        providers &&
                        Object.values(providers).map((provider) => (
                            <button type='button' key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className='black_btn'
                            >
                                Sign In
                            </button>
                        ))

                    }
                </>
                }
            </div>

            {/* {Mobile Navigation} */}
            <div className='sm:hidden flex relative'>
                {isUserLogin ? (
                    <div className='flex'>
                        <Image
                            src='https://i.ibb.co/jZrPF8p/kar-rakib-1.jpg'
                            width={37}
                            height={37}
                            className='rounded full'
                            alt='profile'
                            onClick={() => setToggleDrop((prev) => !prev)}
                        />
                        {toggleDrop && (
                            <div className='dropdown'>
                                <Link
                                    href='/profile'
                                    className='dropdown_link'
                                    onClick={() => setToggleDrop(false)}
                                >
                                    MY Profile
                                </Link>
                                <Link
                                    href='/create-prompt'
                                    className='dropdown_link'
                                    onClick={() => setToggleDrop(false)}
                                >
                                    Create Prompt
                                </Link>
                                <button
                                type='button'
                                className='mt-5 w-full black_btn'
                                onClick={()=> {setToggleDrop(false);
                                signOut();}}>
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) :
                    <>
                        {
                            providers &&
                            Object.values(providers).map((provider) => (
                                <button type='button' key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className='black_btn'
                                >
                                    Sign In
                                </button>
                            ))

                        }

                    </>
                }
            </div>
            {/* <ul className='flex gap-2'>
                <li> <Link href={'/'}>Home </Link></li>
                <li> <Link href={'/'}>Page </Link></li>
                <li> <Link href={'/'}>Login </Link></li>
                <li> <Link href={'/'}>Register </Link></li>
            </ul> */}
        </div>
    );
}

export default Navbar;
