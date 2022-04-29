export interface Paged<T> {
    content: T[];
    pageable: {
        sort: {
            sorted: boolean;
        }
    };
    last: boolean;
    first: boolean;
    empty: boolean;

    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    numberOfElements: number;
}
