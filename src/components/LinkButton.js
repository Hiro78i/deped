import { jsx as _jsx } from "react/jsx-runtime";
export default function LinkButton({ href, children }) {
    return (_jsx("a", { href: href, target: "_blank", rel: "noopener noreferrer", className: "inline-flex w-full items-center justify-center rounded-full bg-[#1f5fa8] px-6 py-3 text-white shadow transition-colors hover:bg-[#1b5392] active:bg-[#184a82]", children: children }));
}
