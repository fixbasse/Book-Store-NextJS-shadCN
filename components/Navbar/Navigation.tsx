import Link from "next/link"

const navData = [
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
]

const Navigation = () => {
    return (
        <div className="hidden lg:flex items-center gap-8 font-bold text-xl">
            {navData.map((item) => (
                <Link
                    href={item.href}
                    key={item.href}
                    className="hover:text-primary"
                >
                    {item.label}
                </Link>
            ))}
        </div>
    )
}

export default Navigation