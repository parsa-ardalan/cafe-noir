import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice/cartSlice";

import $ from "jquery";
import "notifyjs";

import items from "../../../public/data/hot-bar.json";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Hot() {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleAddToCart = (item) => {

        // 1. add to state
        dispatch(addItem(item));

        //2.show notification
        toast.success(`${item.name} به سبد خرید اضافه شد`)
        //3. 



    };

    return (
        <main
            className="min-h-screen bg-[#0d0b0a] text-[#f5f1ec] px-5 pb-12"
            dir="rtl"
        >

            {/* Header */}
            <header className="pt-7 pb-8">

                <div className="flex items-center justify-between">

                    <div>
                        <h1 className="text-2xl font-medium">
                            بار گرم
                        </h1>

                        <p className="text-xs text-white/35 mt-2">
                            قهوه و نوشیدنی‌های گرم
                        </p>
                    </div>

                    {/* Cart */}
                    <button
                        className="
                            w-11
                            h-11
                            rounded-full
                            border border-white/10
                            bg-white/[0.03]
                            flex
                            items-center
                            justify-center
                            text-white/70
                            transition
                            hover:bg-white/[0.07]
                        "
                        onClick={() => { navigate("/cart") }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>
                    </button>

                </div>

            </header>


            {/* Products */}
            <section className="grid grid-cols-2 gap-4">

                {items.map((item) => (

                    <article
                        key={item.name}
                        className="
                                    col-span-1
                                    shrink-0 snap-start
                                    overflow-hidden
                                    rounded-2xl
                                    border border-white/10
                                    bg-[#151312]
                                    p-2.5
                                "
                    >

                        {/* Image */}
                        <div className="relative aspect-square overflow-hidden rounded-xl">

                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-full w-full object-cover"
                            />

                        </div>


                        {/* Info */}
                        <div className="px-0.5 pb-1 pt-3">

                            <h3 className="truncate text-sm font-medium sm:text-base">
                                {item.name}
                            </h3>


                            <div className="mt-1 flex items-center justify-between gap-2">

                                {/* Price */}
                                <div className="flex min-w-0 items-baseline gap-1">

                                    <span className="truncate text-sm font-medium text-[#d99554]">
                                        {item.price.toLocaleString("fa-IR")}
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
                                    onClick={() => { handleAddToCart(item) }}
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

            </section>

        </main>
    );
}

export default Hot;