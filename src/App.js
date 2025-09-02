import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ACTIONS } from "./data";
import Header from "./components/Header";
import LinkButton from "./components/LinkButton";
import CornerImage from "./components/CornerImage";
import Footer from "./components/Footer";
export default function App() {
    return (_jsxs("div", { className: "relative min-h-dvh bg-[#fff6b7] text-slate-900 flex flex-col", children: [_jsx(Header, {}), _jsxs("main", { className: "relative mx-auto max-w-6xl px-4 py-14 pb-28 flex-grow", children: [_jsx("h1", { className: "text-center font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide", children: "How we can help you Ma\u2019am / Sir?" }), _jsx("div", { className: "mx-auto mt-10 w-full max-w-xl grid gap-4", children: ACTIONS.map((action) => (_jsx(LinkButton, { href: action.href, children: action.title }, action.title))) }), _jsx(CornerImage, { position: "left" }), _jsx(CornerImage, { position: "right" })] }), _jsx(Footer, {})] }));
}
