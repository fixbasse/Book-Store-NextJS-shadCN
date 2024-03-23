import BottomNavbar from "./BottomNavbar/BottomNavbar"
import TopNavbar from "./TopNavbar/TopNavbar"

const Navbar =  () => {
    
    return (
        <nav className="flex flex-col gap-8 p-4 lg:px-16 fixed w-full bg-background z-50">
            {/* TOP */}
            <section className="flex items-center justify-between">
                <TopNavbar />
            </section>

            {/* BOTTOM */}
            <section className="flex items-center gap-4">
                <BottomNavbar />
            </section>
        </nav>
    )
}

export default Navbar