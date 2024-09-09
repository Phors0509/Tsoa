"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const tsoa_1 = require("tsoa");
const product_1 = require("../models/product");
let ProductController = class ProductController extends tsoa_1.Controller {
    getProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return product_1.ProductModel.findById(id).exec().then((product) => {
                if (!product)
                    throw new Error('Product not found');
                return product;
            });
        });
    }
    createProduct(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            return new product_1.ProductModel(requestBody).save();
        });
    }
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return product_1.ProductModel.find().exec();
        });
    }
    updateProduct(id, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            return product_1.ProductModel.findByIdAndUpdate(id, requestBody, { new: true }).exec().then((product) => {
                if (!product)
                    throw new Error('Product not found');
                return product;
            });
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return product_1.ProductModel.findByIdAndDelete(id).exec().then((product) => {
                if (!product)
                    throw new Error('Product not found');
            });
        });
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, tsoa_1.Get)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProduct", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "Created"),
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, tsoa_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProducts", null);
__decorate([
    (0, tsoa_1.Put)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, tsoa_1.Delete)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, tsoa_1.Route)("products")
], ProductController);
