import { jsx as _jsx } from "react/jsx-runtime";
export default function CornerImage({ position }) {
    const className = position === "left" ? "left-2" : "right-2";
    return (_jsx("div", { className: "pointer-events-none select-none hidden sm:block", children: _jsx("div", { className: `absolute -bottom-1 ${className}`, children: _jsx("img", { src: "/window.svg", alt: "Illustration placeholder", className: "h-[180px] w-[180px] opacity-90" }) }) }));
}
