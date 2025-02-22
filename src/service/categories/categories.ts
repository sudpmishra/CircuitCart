import { Prisma } from "@prisma/client";

import { prisma } from "@service/prisma";

export class CategoryService {
  // ✅ Create Category
  static async createCategory(data: Prisma.CategoryCreateInput) {
    return prisma.category.create({ data });
  }

  // ✅ Get Category by ID
  static async getCategoryById(id: string) {
    return prisma.category.findUnique({ where: { id } });
  }

  // ✅ Update Category
  static async updateCategory(id: string, data: Prisma.CategoryUpdateInput) {
    return prisma.category.update({ where: { id }, data });
  }

  // ✅ Delete Category
  static async deleteCategory(id: string) {
    return prisma.category.delete({ where: { id } });
  }
  static async getAllCategorys() {
    return prisma.category.findMany();
  }
}
