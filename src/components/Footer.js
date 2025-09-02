import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export default function Footer() {
    return (
        _jsx("footer", { className: "bg-[#0b4b73] text-white mt-auto", children: 
            _jsxs("div", { className: "mx-auto max-w-6xl px-4 py-4 flex items-center justify-between", children: [
                _jsxs("div", { className: "text-sm", children: [
                    "\u00A9 ", new Date().getFullYear(), " Department of Education Region V. All rights reserved."
                ] }),
                _jsxs("div", { className: "flex items-center gap-4", children: [
                    _jsx("img", { src: "/logo-left.svg", alt: "Left logo placeholder", className: "h-10 w-10" }),
                    _jsx("img", { src: "/logo-right.svg", alt: "Right logo placeholder", className: "h-10 w-10 hidden sm:block" })
                ] })
            ] })
        })
    );
}
