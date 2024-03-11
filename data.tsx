import { FaBookOpen } from "react-icons/fa";
import { TbBeach } from "react-icons/tb";
import { GiCastle } from "react-icons/gi";
import { SiBoardgamegeek, SiSemanticscholar } from "react-icons/si";
import { FaShirt } from "react-icons/fa6";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export const navData = [
    {
        label: 'Book',
        href: '/book'
    },
    {
        label: 'Course Online',
        href: '/course'
    },
    {
        label: 'NonBook',
        href: '/nonbook'
    },
    {
        label: 'Marketplace',
        href: '/marketplace'
    },
    {
        label: 'Blog',
        href: '/blog'
    },
];

export const categoriesData = [
    {
        label: 'Novel',
        icon: <FaBookOpen />
    },
    {
        label: 'Travel',
        icon: <TbBeach />
    },
    {
        label: 'Thesis',
        icon: <SiSemanticscholar />

    },
    {
        label: 'History',
        icon: <GiCastle />
    },
];

export const lifestylesData = [
    {
        label: 'Board Game',
        icon: <SiBoardgamegeek />
    },
    {
        label: 'Uniform',
        icon: <FaShirt />
    },
    {
        label: 'Thesis',
        icon: <SiSemanticscholar />

    },
    {
        label: 'History',
        icon: <GiCastle />
    },
];

export const userMenuData = [
    {
        label: 'Manage Account',
        href: '/account/dashboard',
        icon: <RiAccountBoxFill />
    },
    {
        label: 'My Order',
        href: '/account/order',
        icon: <FaCartShopping />
    },
    {
        label: 'My Favourite',
        href: '/account/favourite',
        icon: <FaHeart />
    },
    {
        label: 'My Review',
        href: '/account/review',
        icon: <FaStar />
    },
]