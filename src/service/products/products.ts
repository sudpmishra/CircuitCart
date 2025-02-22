import { Prisma } from "@prisma/client";

import { prisma } from "@service/prisma";

export class ProductService {
  // ✅ Create Product
  static async createProduct(data: Prisma.ProductCreateInput) {
    return prisma.product.create({ data });
  }

  // ✅ Get Paginated Products
  static async getProducts(
    page: number = 1,
    pageSize: number = 10,
    query: string = "",
    category: string = ""
  ) {
    const skip = (page - 1) * pageSize;
    const products = await prisma.product.findMany({
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
      where: {
        ...(category != "All" ? { categoryId: category } : {}),
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive", // Case insensitive search
            },
          },
          {
            description: {
              contains: query,
              mode: "insensitive", // Case insensitive search
            },
          },
        ],
      },
    });

    const totalCount = await prisma.product.count();
    return { products, totalPages: Math.ceil(totalCount / pageSize) };
  }

  // ✅ Get Product by ID
  static async getProductById(id: string) {
    return prisma.product.findUnique({ where: { id } });
  }

  // ✅ Update Product
  static async updateProduct(id: string, data: Prisma.ProductUpdateInput) {
    return prisma.product.update({ where: { id }, data });
  }

  // ✅ Delete Product
  static async deleteProduct(id: string) {
    return prisma.product.delete({ where: { id } });
  }
  static async getAllProducts() {
    return prisma.product.findMany();
  }
}
