import { FaBookOpen } from "react-icons/fa";
import { TbBeach } from "react-icons/tb";
import { GiCastle } from "react-icons/gi";
import { SiBoardgamegeek, SiSemanticscholar } from "react-icons/si";
import { FaShirt } from "react-icons/fa6";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { cartDataType } from "./types";

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
];

export const addressHeader = [
    {
        id: '1',
        label: 'Name'
    },
    {
        id: '2',
        label: 'Address'
    },
    {
        id: '3',
        label: 'Postcode'
    },
    {
        id: '4',
        label: 'Mobile'
    },
]

export const cartData: cartDataType[] = [
    {
        id: "1",
        label: "Harry Potter and The Order of Pheonix",
        price: 20,
        img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546910265l/2.jpg',
        author: 'J.K. Rowling'
    },
    {
        id: "2",
        label: "Harry Potter and The Goblet of Fire",
        price: 30,
        img: 'https://prodimage.images-bn.com/pimages/9780439139601_p0_v1_s1200x630.jpg',
        author: 'J.K. Rowling'
    },
]  