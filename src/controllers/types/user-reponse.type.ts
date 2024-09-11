import { IProduct } from "@/database/models/product.model";

export interface ProductResponse {
    message: string
    data: IProduct
}
