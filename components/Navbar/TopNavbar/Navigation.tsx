import { navData } from "@/data"
import Link from "next/link"

// Middle Navbar
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