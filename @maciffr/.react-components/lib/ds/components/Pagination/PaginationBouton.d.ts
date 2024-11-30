interface PaginationBoutonProps {
    readonly numero: number;
    readonly actif: boolean;
    readonly handlePageChange: (value: number) => void;
    readonly dataTrackAnalytics?: string;
}
export default function PaginationBouton({ numero, actif, handlePageChange, dataTrackAnalytics, }: PaginationBoutonProps): import("react/jsx-runtime").JSX.Element;
export {};
