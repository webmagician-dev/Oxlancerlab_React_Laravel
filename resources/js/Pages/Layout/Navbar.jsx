import { Link } from '@inertiajs/react';
export function Navbar({title}) {
    return (
        <div className="pt-5">
            <div className="container flex mx-auto items-center justify-between text-blue-gray-900">
                <div>
                    <div className="flex text-gray-500 text-sm">Dashboard / <Link href={route("dashboard/home")} className='text-black font-bold'>{title}</Link></div>
                    <h1 className='font-bold text-lg'>{title}</h1>
                </div>
                <div className='flex'>
                    <input type="text" className='rounded-md bg-gray-100' placeholder={'Search'} />
                    <button className='bg-blue-600 font-bold rounded-md cursor-pointer mx-2 text-white py-2 px-3'>Wallet Connect</button>
                    <button className='items-center' id='hamburger'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;