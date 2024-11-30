import "./pagination.css";
export interface PaginationProps {
    readonly pageActive: number;
    readonly nombreBoutonsAffiches: number;
    readonly nombrePages: number;
    readonly afficherExtremites: boolean;
    readonly ariaLabel: string;
    readonly handlePageChange: (value: number) => void | Promise<void>;
    readonly "data-testid"?: string;
    readonly dataTrackAnalytics?: string;
}
declare function Pagination({ pageActive, nombreBoutonsAffiches, nombrePages, afficherExtremites, ariaLabel, handlePageChange, dataTrackAnalytics, ...props }: PaginationProps): import("react/jsx-runtime").JSX.Element;
export default Pagination;
