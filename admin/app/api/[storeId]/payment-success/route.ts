import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

export async function POST(
  req: Request,
) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { orderId } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    // Update the order in the database
    await prismadb.order.update({
      where: { id: orderId },
      data: { isPaid: true },
    });

    return NextResponse.json({ message: 'Payment successful' });
  } catch (error) {
    console.log('[PAYMENT_SUCCESS_POST]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};