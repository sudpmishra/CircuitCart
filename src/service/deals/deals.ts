import { prisma } from "@service/prisma";

export class DealService {
  // ✅ Get 10 Recent Hot Products
  static async getHotProducts() {
    return prisma.product.findMany({
      where: { isHotDeal: true }, // Assuming 'isHot' flag exists in your Product schema
      take: 10,
      orderBy: { createdAt: "desc" },
    });
  }

  // ✅ Get 8 Recent Sale Products
  static async getSaleProducts() {
    return prisma.product.findMany({
      where: {
        isOnSale: true,
      },
      take: 8,
      orderBy: { createdAt: "desc" },
    });
  }

  // ✅ Get 5 Recent Promotional Offers
  static async getPromotionalOffers() {
    return prisma.product.findMany({
      where: { isPromotional: true }, // Assuming 'isPromotional' flag exists in your Product schema
      take: 5,
      orderBy: { createdAt: "desc" },
    });
  }

  static async getPromotionById(id: string) {
    return prisma.promotion.findFirst({
      where: { id },
    });
  }
}
