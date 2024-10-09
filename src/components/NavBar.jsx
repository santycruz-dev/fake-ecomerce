import { MdOutlineShoppingCart } from "react-icons/md";


const NavBar = () => {
    return (
        <nav className="w-full p-4 mt-4 flex items-center justify-between border-t">
            <span className="text-xl font-bold">Home</span>
            <ul className="bg-[#eeeee6] rounded-full" >
                <MdOutlineShoppingCart className="text-xl" />
            </ul>
        </nav>
    )
}

export default NavBar