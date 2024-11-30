interface ChevronBtnProps {
    onClick: () => unknown;
    direction: "gauche" | "droite";
    size: number;
}
declare const ChevronBtn: ({ onClick, direction, size, ...props }: ChevronBtnProps) => import("react/jsx-runtime").JSX.Element;
export default ChevronBtn;
