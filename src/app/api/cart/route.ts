import { getUserCartItems, updateCartItem } from "@/service/carts/carts";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const cartItems = await getUserCartItems();
  return NextResponse.json(cartItems);
}

export async function POST(request: NextRequest) {
  try {
    const { itemId, quantity } = await request.json();

    // Call your service to update the cart item (you might need to add this method to your service)
    const updatedItem = await updateCartItem(itemId, quantity);

    // If the item is updated successfully, return the updated item
    if (updatedItem) return NextResponse.json(updatedItem, { status: 200 });
    else return NextResponse.json({ success: false }, { status: 500 });
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
}
