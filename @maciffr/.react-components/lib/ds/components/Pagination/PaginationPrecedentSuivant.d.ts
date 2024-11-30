interface PaginationPrecedentSuivantProps {
    readonly pageActive: number;
    readonly handlePageChange: (value: number) => void;
    readonly isLeft?: boolean;
    readonly borne: number;
    readonly dataTrackAnalytics?: string;
}
declare function PaginationPrecedentSuivant({ pageActive, handlePageChange, isLeft, borne, dataTrackAnalytics, }: PaginationPrecedentSuivantProps): import("react/jsx-runtime").JSX.Element | null;
export default PaginationPrecedentSuivant;
