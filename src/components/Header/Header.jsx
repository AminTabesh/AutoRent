import { Link } from "react-router-dom"
import Button from "../Button/Button"
import HeaderMenu from "./HeaderMenu"

function Header() {
    return (
        <div className="border-[1px] border-gray-300 fixed top-0 left-0 right-0 mx-auto bg-white h-24 w-9/12 rounded-b-2xl flex justify-between px-8 items-center font-EstedadLight z-[9999]">
            <Link to='/'><img src="/public/images/Logo.png" alt="Logo" className="h-[59px]"/></Link>
            <HeaderMenu />
            <Button text={'ورود/ثبت نام'} type='primary' />
        </div>
    )
}

export default Header
