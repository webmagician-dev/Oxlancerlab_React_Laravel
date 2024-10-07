import { Link } from '@inertiajs/react';
import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export function Sidebar({title}) {
  return (
    <aside className="bg-white fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`">
        <ul className="mb-4 flex flex-col gap-1 cursor-pointer">
            <li className="mx-3.5 m-5 p-3 text-center font-bold text-xl">
               <Link href={route("dashboard/home")}>OxLancerLab</Link>
            </li>
            { title === 'Home' ?  
              <li className="mx-3.5 p-4 bg-gray-700 rounded-md text-white">
                <Link href={route("dashboard/home")}><div className='flex'><HomeIcon {...icon} /> &nbsp;&nbsp;&nbsp; Dashboard</div></Link>
              </li> : 
              <li className="mx-3.5 p-4 hover:bg-red-600 focus:outline-none focus:ring focus:ring-violet-300 hover:rounded-md">
                <Link href={route("dashboard/home")}><div className='flex'><HomeIcon {...icon} /> &nbsp;&nbsp;&nbsp; Dashboard</div></Link>
              </li>
            }
            { title === 'Airdrop' ?  
              <li className="mx-3.5 p-4 bg-gray-700 rounded-md text-white">
                <Link href={route("dashboard/airdrop")}><div className='flex'><UserCircleIcon {...icon} /> &nbsp;&nbsp;&nbsp; Airdrop</div></Link>
              </li> : 
              <li className="mx-3.5 p-4 hover:bg-red-600 focus:outline-none focus:ring focus:ring-violet-300 hover:rounded-md">
                <Link href={route("dashboard/airdrop")}><div className='flex'><UserCircleIcon {...icon} /> &nbsp;&nbsp;&nbsp; Airdrop</div></Link>
              </li>
            }
            { title === 'Pitchdecks' ?  
              <li className="mx-3.5 p-4 bg-gray-700 rounded-md text-white">
                <Link href={route("dashboard/pitchdecks")}><div className='flex'><TableCellsIcon {...icon} /> &nbsp;&nbsp;&nbsp; Pitch Decks</div></Link>
              </li> : 
              <li className="mx-3.5 p-4 hover:bg-red-600 focus:outline-none focus:ring focus:ring-violet-300 hover:rounded-md">
                <Link href={route("dashboard/pitchdecks")}><div className='flex'><TableCellsIcon {...icon} /> &nbsp;&nbsp;&nbsp; Pitch Decks</div></Link>
              </li>
            }
            { title === 'Adminpanel' ?  
              <li className="mx-3.5 p-4 bg-gray-700 rounded-md text-white">
                <Link href={route("dashboard/adminpanel")}><div className='flex'><InformationCircleIcon {...icon} /> &nbsp;&nbsp;&nbsp; Admin Panel</div></Link>
              </li> : 
              <li className="mx-3.5 p-4 hover:bg-red-600 focus:outline-none focus:ring focus:ring-violet-300 hover:rounded-md">
                <Link href={route("dashboard/adminpanel")}><div className='flex'><InformationCircleIcon {...icon} /> &nbsp;&nbsp;&nbsp; Admin Panel</div></Link>
              </li>
            }
        </ul>
    </aside>
  );
}

export default Sidebar;
