import Image from "next/image"
import { IoBonfireSharp, IoBrowsersOutline, IoCalculator, IoHeartOutline, IoLogoReact } from 'react-icons/io5'
import { SidebarMenuItem } from ".."

const menuItem = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline/>,
        title: 'Dashboard',
        subTitle: 'Visial'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={20}/>,
        title: 'Counter',
        subTitle: 'contador'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoBonfireSharp />,
        title: 'Pokemons',
        subTitle: 'Generacion estatica'
    },
    {
        path: '/dashboard/favorites',
        icon: <IoHeartOutline className="text-red-500"/>,
        title: 'Pokemons',
        subTitle: 'Global State'
    }
]

export const Sidebar = () => {
    return (
        <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className="mr-2"/>
                    <span>Dash</span>
                    <span className="text-blue-500">8</span>
                    .</h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" 
                        alt="User avatar" 
                        height={50}
                        width={50}/>
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Johinner MC
                    </span>
                </a>
            </div>

            <div id="nav" className="w-full px-6">

            {
                menuItem.map( item => (
                    <SidebarMenuItem
                        key={item.path}
                        {...item}
                        // path={item.path}
                        // icon={item.icon}
                        // title={item.title}
                        // subTitle={item.subTitle}
                    />
                ))
            }
            

            </div>
        </div>
    )
}
