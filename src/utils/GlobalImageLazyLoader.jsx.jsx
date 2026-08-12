import { useEffect } from "react";

function GlobalImageLazyLoader({ children }) {

    useEffect(() => {

        const setLazy = (element) => {

            if (element.tagName === "IMG") {
                element.loading = "lazy";
            }

            const images = element.querySelectorAll?.("img");

            images?.forEach((image) => {
                image.loading = "lazy";
            });
        };


        // عکس‌های موجود
        setLazy(document.body);


        // عکس‌هایی که بعداً توسط React ساخته می‌شوند
        const observer = new MutationObserver((mutations) => {

            mutations.forEach((mutation) => {

                mutation.addedNodes.forEach((node) => {

                    if (node.nodeType === Node.ELEMENT_NODE) {
                        setLazy(node);
                    }

                });

            });

        });


        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });


        return () => {
            observer.disconnect();
        };

    }, []);


    return children;
}

export default GlobalImageLazyLoader;
