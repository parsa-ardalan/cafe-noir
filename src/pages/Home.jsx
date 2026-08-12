import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice/cartSlice";

import logo from "../../public/images/general/logo.png"
import banner from "../../public/images/general/banner.png"

import hot from "../../public/images/general/logo.png"
import cold from "../../public/images/general/logo.png"
import dessert from "../../public/images/general/logo.png"
import { useNavigate } from "react-router-dom";



function Home() {

    const navigate = useNavigate();

    const categories = [
        {
            title: "بار گرم",
            icon: hot,
            link: "/hot"
        },
        {
            title: "بار سرد",
            icon: cold,
            link: "/cold"
        },
        {
            title: "کیک و دسر",
            icon: dessert,
            link: "/dessert"
        },
    ];

    return (
        <main className="min-h-screen bg-[#0d0b0a] text-[#f5f1ec] px-5" dir="rtl">

            {/* header */}
            <header className="w-full h-52 pt-3">

                {/* top part */}
                <div className="flex">

                    {/* cart icon */}
                    <div className="w-1/2 h-16 flex items-center justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" onClick={() => navigate("/cart")}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </div>

                    {/* logo */}
                    <div className="w-1/2 h-16 flex items-center justify-end">
                        <img src={logo} alt="nlogo" className="size-14" />
                    </div>

                </div>

                {/* cafe name and welcome text */}
                <div className="w- mt-5 pr-10">

                    <h1 className="text-3xl"> کافه نویر </h1>

                    <p className="text-sm mt-5"> صبح دل انگیزیه، نه؟ </p>

                </div>

            </header>

            {/* search box */}
            <div className="w-full h-14 bg-white/10 rounded-xl flex items-center px-3">

                {/* search icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

                <input type="text" placeholder="سفارشت رو جستجو کن..." className="outline-0 mr-3 text-sm" />

            </div>

            {/* offer box */}
            <div className="w-full h-56 border rounded-2xl mt-5">
                <img src={banner} alt="banner" className="w-full h-full rounded-3xl" />
            </div>

            {/* categories */}
            <div className="w-full h-fit grid grid-cols-3 gap-3 mt-5">
                {
                    categories.map(item => (
                        <div key={item.title} className="col-span-1 h-fit rounded-2xl border border-white/10 py-3" onClick={() => navigate(item.link)} >

                            <div className="w-full h-fit flex items-center justify-center">
                                <img src={item.icon} alt=" " className="size-14" />
                            </div>

                            <div className="w-full flex items-center justify-center text-sm pb-2">
                                {item.title}
                            </div>

                        </div>
                    ))
                }
            </div>



        </main>
    );
}

export default Home;