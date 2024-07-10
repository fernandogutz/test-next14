import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link"
import { ActiveLink } from "@/components";

const temporalAsync = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 2000)
    })
}

const navItems = [
    {path: '/about', title: 'About'},
    {path: '/contact', title: 'Contact'},
    {path: '/pricing', title: 'Pricing'}
]

export const Navbar = async () => {
    await temporalAsync();

    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href='/' className="flex items-center">
                <HomeIcon size={16} className="mr-2"/>
                <span>Home</span> 
            </Link>

            <div className="flex flex-1"></div>
            
            {
                navItems.map( navItem => (
                    <ActiveLink key={navItem.path} {...navItem}></ActiveLink>
                ))
            }
        </nav>
    )
}
