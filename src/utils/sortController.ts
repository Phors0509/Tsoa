import { ProductSortParams, SortOrder } from "@/database/repositories/types/productParams";

export const convertSortFields = (sort: ProductSortParams): Record<string, SortOrder> => {
    return Object.keys(sort).reduce((acc, key) => {
        const direction = sort[key];
        if (direction === 'asc' || direction === 'desc') {
            acc[key] = direction === 'asc' ? 1 : -1;
        }
        return acc;
    }, {} as Record<string, SortOrder>);
};