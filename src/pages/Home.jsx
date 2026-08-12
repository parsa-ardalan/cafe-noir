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

    if (window.innerWidth > 1000) {
        return (
            <main
                className="min-h-screen bg-[#0d0b0a] text-[#f5f1ec] px-5 flex items-center justify-center"
                dir="rtl"
            >
                <div className="w-full max-w-md text-center animate-[fadeIn_.6s_ease-out] animate-pulse">

                    {/* Icon */}
                    <div
                        className="
                mx-auto mb-7
                w-20 h-20
                rounded-3xl
                flex items-center justify-center
                bg-[#c9a47c]/10
                border border-[#c9a47c]/20
                shadow-[0_0_40px_rgba(201,164,124,0.08)]
                animate-[float_3s_ease-in-out_infinite]
            "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="38"
                            height="38"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="text-[#c9a47c]"
                        >
                            <rect width="14" height="20" x="5" y="2" rx="2" />
                            <path d="M12 18h.01" />
                        </svg>
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
                        لطفاً منو را با موبایل باز کنید
                    </h1>

                    {/* Description */}
                    <p className="text-sm leading-7 text-[#a9a19a] mb-8">
                        برای تجربه بهتر و دسترسی کامل به منوی کافه،
                        لطفاً این صفحه را با تلفن همراه خود باز کنید.
                    </p>

                    {/* Close Button */}
                    <button
                        onClick={() => { window.close()}}
                        className="
                inline-flex items-center justify-center gap-2
                px-6 py-3
                rounded-xl
                bg-[#f5f1ec]
                text-[#0d0b0a]
                text-sm font-semibold
                transition-all duration-300
                hover:bg-[#c9a47c]
                hover:-translate-y-0.5
                active:scale-95
            "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>

                        بستن وب‌سایت
                    </button>

                    <p className="mt-5 text-xs text-[#625b55]">
                        بهترین تجربه در تلفن همراه ✦
                    </p>
                </div>

            </main>
        )
    }

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
            <div className="w-full h-56 border rounded-2xl mt-5 md:h-78">
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