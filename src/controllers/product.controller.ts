import { Body, Controller, Delete, Get, Path, Post, Put, Route, SuccessResponse } from "tsoa";
import { IProduct, ProductModel } from "../models/product";

@Route("products")
export class ProductController extends Controller {
    @Get("{id}")
    public async getProduct(@Path() id: string): Promise<IProduct> {
        return ProductModel.findById(id).exec().then((product) => {
            if (!product) throw new Error('Product not found');
            return product;
        });
    }

    @SuccessResponse("201", "Created")
    @Post()
    public async createProduct(@Body() requestBody: IProduct): Promise<IProduct> {
        return new ProductModel(requestBody).save();
    }

    @Get()
    public async getProducts(): Promise<IProduct[]> {
        return ProductModel.find().exec();
    }

    @Put("{id}")
    public async updateProduct(@Path() id: string, @Body() requestBody: IProduct): Promise<IProduct> {
        return ProductModel.findByIdAndUpdate(id, requestBody, { new: true }).exec().then((product) => {
            if (!product) throw new Error('Product not found');
            return product;
        });
    }

    @Delete("{id}")
    public async deleteProduct(@Path() id: string): Promise<void> {
        return ProductModel.findByIdAndDelete(id).exec().then((product) => {
            if (!product) throw new Error('Product not found');
        });
    }
}