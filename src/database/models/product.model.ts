import mongoose from 'mongoose';

export interface IProduct {
    name: string;
    price: number;
    description: string;
}

const ProductSchema = new mongoose.Schema<IProduct>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
}, {
    timestamps: true,
});

const ProductModel = mongoose.model<IProduct>('Product', ProductSchema);
export default ProductModel;