import { useNavigate } from "react-router-dom"
import Button from "../components/Button/Button"
import Header from "../components/Header/Header"

function PageNotFound() {
    const navigate = useNavigate()
    return (
        <div className="flex justify-center bg-background h-screen items-center relative">
            <Header />
            <img src="/public/images/404.png" alt="not found" className="h-[550px] mt-20 bg-white rounded-2xl"/>
            <Button type='white' text="برگشتن به صفحه اصلی" className={`absolute bottom-32`} onClick={() => navigate('/')}/>
        </div>
    )
}

export default PageNotFound
