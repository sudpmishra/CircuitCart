"use server";
import { auth } from "@/auth";
import { prisma } from "@service/prisma";

export const addProductToCart = async (productId: string) => {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return {
      success: false,
      message: "No user found. Please Login!",
    };
  }

  return await prisma.$transaction(async (tx) => {
    // Get or create the user's cart
    const userCart = await tx.cart.upsert({
      where: { userId },
      create: { userId },
      update: {},
      select: { id: true },
    });

    // Check if product already exists in the cart
    const cartItem = await tx.cartItem.findFirst({
      where: { cartId: userCart.id, productId },
    });

    if (cartItem) {
      await tx.cartItem.update({
        where: { id: cartItem.id },
        data: { quantity: cartItem.quantity + 1 },
      });
    } else {
      await tx.cartItem.create({
        data: {
          cartId: userCart.id,
          productId,
          quantity: 1,
        },
      });
    }

    return {
      success: true,
      message: "Success",
    };
  });
};

export const getUserCartItems = async () => {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return [];

  const db = prisma;
  const cart = await db.cart.findFirst({
    where: { userId },
    select: { id: true },
  });

  return cart
    ? await db.cartItem.findMany({
        where: { cartId: cart.id },
        include: { product: true },
        orderBy: {
          createdAt: "desc",
        },
      })
    : [];
};

export const updateCartItem = async (itemId: string, quantity: number) => {
  const cartItems = await getUserCartItems();
  const cartItem = cartItems.find((x) => x.productId == itemId);

  if (!cartItem) return false;
  const canDecreaseCart = cartItem.quantity + quantity <= 0;
  try {
    if (quantity === 0 || canDecreaseCart) {
      await prisma.cartItem.delete({
        where: { id: cartItem.id },
      });
    } else {
      await prisma.cartItem.update({
        where: { id: cartItem.id },
        data: {
          quantity: cartItem.quantity + quantity,
        },
      });
    }
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
