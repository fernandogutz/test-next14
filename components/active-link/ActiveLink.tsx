'use client';

import Link from "next/link";
import style from "./ActiveLink.module.css"
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    title: string;
}

export const ActiveLink = ({ path, title }: Props) => {
    const pathName = usePathname();
    console.log(pathName);

    return (
        <Link
            href={path}
            className={`${style.link} ${ pathName === path && style['active-link']} `}
        >{title}
        </Link>
    )
}
