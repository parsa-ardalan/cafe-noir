import { Plus, Tag } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import logo from "../../../public/images/general/logo.png";
import { addItem, removeItem } from "../../redux/cartSlice/cartSlice";

import { useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";


export default function Cart() {

    const cartItems = useSelector((state) => state.cart);
    const navigate = useNavigate();

    // offered items
    const offered = [
        {
            "name": "چای دارچین",
            "description": "ترکیبی خوش‌عطر از گل‌های معطر و گیاهان آرامش‌بخش. مناسب برای لحظاتی آرام و دلنشین.",
            "deliveryTime": "7-12 min",
            "price": 90000,
            "image": "../images/hot/tea.jpg"
        },
        {
            name: "کوکی شکلات چیپ",
            description: "کوکی تازه و خوش‌عطر با تکه‌های شکلات در هر لقمه. بیرون کمی ترد و داخل نرم و لطیف.",
            deliveryTime: "5-10 min",
            price: 95000,
            image: "../images/desserts/chocolate-chip-cookie.jpg"
        },
        {
            name: "کروسان شکلاتی",
            description: "کروسان لایه‌لایه و تازه با مغز شکلاتی لطیف. انتخابی عالی برای کنار قهوه.",
            deliveryTime: "7-12 min",
            price: 125000,
            image: "../images/desserts/chocolate-croissant.jpg"
        },
        {
            "name": "شیک شکلات",
            "description": "شیک غلیظ و خنک با طعم عمیق شکلات. گزینه‌ای محبوب برای دوستداران نوشیدنی‌های شیرین.",
            "deliveryTime": "8-15 min",
            "price": 175000,
            "image": "../images/cold/chocolate-shake.jpg"
        }

    ];

    const dispatch = useDispatch()

    return (
        <main
            className="min-h-screen bg-[#0d0b0a] px-4 pb-12 text-[#f5f1ec] sm:px-5"
            dir="rtl"
        >
            <div className="mx-auto w-full max-w-5xl">

                {/* Header */}
                <header className="pt-8">
                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <img
                                src={logo}
                                alt="logo"
                                className="size-12"
                            />

                            <div>
                                <h1 className="text-lg font-semibold tracking-wide">
                                    کافه نویر
                                </h1>

                                <p className="text-xs text-white/40">
                                    سبد خرید شما
                                </p>
                            </div>
                        </div>

                        {/* Cart Count */}
                        <div
                            className="
                                flex h-11 items-center gap-2
                                rounded-xl border border-white/10
                                bg-white/[0.03] px-3
                            "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5 text-[#d99554]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="
                                        M2.25 3h1.386
                                        c.51 0 .955.343 1.087.835l.383 1.437
                                        M7.5 14.25a3 3 0 0 0-3 3h15.75
                                        m-12.75-3h11.218
                                        c1.121-2.3 2.1-4.684 2.924-7.138
                                        a60.114 60.114 0 0 0-16.536-1.84
                                        M7.5 14.25 5.106 5.272
                                    "
                                />
                            </svg>

                            <span className="text-sm text-white/70">
                                {cartItems.length} آیتم
                            </span>
                        </div>

                    </div>
                </header>


                {/* Selected Items */}
                <section className="mt-12">

                    <div>
                        {
                            cartItems.length == 0 ? (
                                // cart is empty
                                <div className="w-full min-h-56 flex flex-col items-center justify-center gap-4 text-center">
                                    <div className="rounded-full flex items-center justify-center">
                                        <ShoppingBag size={30} className="text-[#d99554]" />
                                    </div>

                                    <div>
                                        <h2 className="text-lg font-semibold text-[#d99554]">
                                            سبد خرید خالیه!
                                        </h2>

                                        <p className="text-sm text-white/25 mt-1">
                                            هنوز چیزی به سبد خریدت اضافه نکردی
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => navigate("/")}
                                        className="px-5 py-2.5 rounded-xl text-sm font-medium text-[#d99554] bg-[#d99554]/10">
                                        رفتن به منو
                                    </button>
                                </div>
                            ) : (

                                // cart items
                                <div>

                                    <h2 className="mb-4 text-xl font-medium sm:text-2xl">
                                        انتخاب های شما
                                    </h2>

                                    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">

                                        {cartItems.map((item) => (
                                            <article
                                                key={item.name}
                                                className="
                                    overflow-hidden
                                    rounded-2xl
                                    border border-white/10
                                    bg-[#12100f]
                                "
                                            >

                                                {/* Image */}
                                                <div className="aspect-[4/3] overflow-hidden">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>


                                                {/* Info */}
                                                <div className="p-3">

                                                    <h3 className="truncate text-sm font-medium sm:text-base">
                                                        {item.name}
                                                    </h3>

                                                    <div className="mt-3 flex items-center justify-between gap-2">

                                                        {/* Price */}
                                                        <div className="flex min-w-0 items-baseline gap-1">

                                                            <span className="truncate text-sm font-medium text-[#d99554]">
                                                                {item.price.toLocaleString("fa-IR")}
                                                            </span>

                                                            <span className="shrink-0 text-[9px] text-white/30">
                                                                تومان
                                                            </span>

                                                        </div>


                                                        {/* Remove */}
                                                        <button
                                                            className="
                                                flex size-8 shrink-0
                                                items-center justify-center
                                                rounded-lg
                                                bg-white/10
                                                transition
                                                active:scale-90
                                            "
                                                            onClick={() => { dispatch(removeItem(item)) }}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                            </svg>
                                                        </button>

                                                    </div>

                                                </div>

                                            </article>
                                        ))}

                                    </div>

                                </div>
                            )
                        }

                    </div>

                </section>


                {/* Total */}
                <section
                    className="
                        mt-5 rounded-2xl
                        border border-white/10
                        bg-[#151312]
                        p-4 sm:p-5
                    "
                >

                    <div className="flex items-center justify-between gap-3">

                        <div className="flex items-center gap-2.5">

                            <div
                                className="
                                    flex size-9 shrink-0
                                    items-center justify-center
                                    rounded-lg
                                    bg-white/[0.04]
                                "
                            >
                                <Tag
                                    size={20}
                                    strokeWidth={1.5}
                                    className="text-[#e3ded9]"
                                />
                            </div>

                            <span className="text-base font-medium sm:text-lg">
                                قیمت کل
                            </span>

                        </div>


                        <span
                            className="
                                whitespace-nowrap
                                text-base font-semibold
                                text-[#d99554]
                                sm:text-lg
                            "
                        >
                            315,000 تومان
                        </span>

                    </div>


                    <button
                        className="
                            mt-4 flex h-11 w-full
                            items-center justify-center
                            rounded-xl
                            bg-gradient-to-r
                            from-[#a96631] to-[#7b461f]
                            text-sm font-medium text-white
                            transition
                            hover:brightness-110
                            active:scale-[0.99]
                            sm:h-12 sm:text-base
                        "
                    >
                        پرداخت سبد خرید
                    </button>

                </section>


                {/* Recommended */}
                <section className="mt-8">

                    <div className="mb-4 flex items-center justify-start">
                        <h2 className="text-lg font-medium sm:text-xl">
                            پیشنهاد شده برای شما
                        </h2>
                    </div>


                    <div
                        className="
                            flex gap-3
                            overflow-x-auto
                            pb-2
                            scrollbar-none
                            snap-x snap-mandatory
                        "
                    >

                        {offered.map((offer) => (
                            <article
                                key={offer.name}
                                className="
                                    w-[165px] min-w-[165px]
                                    shrink-0 snap-start
                                    overflow-hidden
                                    rounded-2xl
                                    border border-white/10
                                    bg-[#151312]
                                    p-2.5
                                    sm:w-[190px]
                                    sm:min-w-[190px]
                                "
                            >

                                {/* Image */}
                                <div className="relative aspect-square overflow-hidden rounded-xl">

                                    <img
                                        src={offer.image}
                                        alt={offer.name}
                                        className="h-full w-full object-cover"
                                    />

                                </div>


                                {/* Info */}
                                <div className="px-0.5 pb-1 pt-3">

                                    <h3 className="truncate text-sm font-medium sm:text-base">
                                        {offer.name}
                                    </h3>


                                    <div className="mt-4 flex items-center justify-between gap-2">

                                        {/* Price */}
                                        <div className="flex min-w-0 items-baseline gap-1">

                                            <span className="truncate text-sm font-medium text-[#d99554]">
                                                {offer.price.toLocaleString("fa-IR")}
                                            </span>

                                            <span className="shrink-0 text-[9px] text-white/30">
                                                تومان
                                            </span>

                                        </div>


                                        {/* Add */}
                                        <button
                                            className="
                                                flex size-8 shrink-0
                                                items-center justify-center
                                                rounded-full
                                                border border-[#d99554]
                                                transition
                                                hover:bg-[#d99554]/10
                                                active:scale-90
                                            "
                                            onClick={() => { dispatch(addItem(offer)) }}
                                        >
                                            <Plus
                                                size={16}
                                                strokeWidth={2}
                                                className="text-[#d99554]"
                                            />
                                        </button>

                                    </div>

                                </div>

                            </article>
                        ))}

                    </div>

                </section>

            </div>
        </main>
    );
}