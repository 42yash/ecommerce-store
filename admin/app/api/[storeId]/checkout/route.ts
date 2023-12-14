import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { Cashfree } from "cashfree-pg";
import * as assert from "assert";
import { create } from "domain";

Cashfree.XClientId = process.env.CASHFREE_APP_ID;
Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY;
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: Request, { params }: { params: { storeId: string } }) {
  const { productIds, orderData, totalPrice } = await req.json();

  if (!productIds || productIds.length === 0) {
    return new NextResponse("Product ids are required", { status: 400 });
  }

  // Combine all the address fields into a single string
  const address = `${orderData.firstName}, ${orderData.lastName}, ${orderData.floor}, ${orderData.buildingName}, ${orderData.streetAddress}, ${orderData.city}, ${orderData.state}, ${orderData.pincode}`;


  const products = await prismadb.product.findMany({
    where: {
      id: {
        in: productIds
      }
    }
  });


  const order = await prismadb.order.create({
    data: {
      storeId: params.storeId,
      isPaid: false,
      totalPrice: totalPrice,
      phone: orderData.phone, // Include the phone number
      address: address,
      orderItems: {
        create: productIds.map((productId: string) => ({
          product: {
            connect: {
              id: productId
            }
          }
        }))
      }
    }
  });

  function createOrder() {
    console.log("process.env.PG_CLIENT_ID");
    console.log(process.env.PG_CLIENT_ID);
    var request = {
      "order_amount": totalPrice,
      "order_currency": "INR",
      "customer_details": {
        "customer_id": "iij",
        "customer_name": "abcd",
        "customer_email": "success@eligibility.com",
        "customer_phone": "9999999999"
      },

      "order_note": "Test order",
      "order_tags": {
        "abc": "def"
      }
    }


    var paymentLink = "";
    var orderId = "";
    function setOrderDetails(order_id: string, payment_link: string) {
      orderId = order_id
      paymentLink = payment_link
    }

    Cashfree.PGCreateOrder("2022-09-01", request).then((response) => {
      assert.equal(response.data.order_amount, request.order_amount, "Amount is not matching")
      assert.equal(response.data.order_currency, "INR", "Currency is not matching")
      assert.equal(response.data.customer_details?.customer_id, response.data.customer_details?.customer_id, "Customer id is not matching")
      assert.equal(response.data.customer_details?.customer_name, response.data.customer_details?.customer_name, "Customer name is not matching")
      assert.equal(response.data.customer_details?.customer_email, response.data.customer_details?.customer_email, "Customer email is not matching")
      assert.equal(response.data.customer_details?.customer_phone, response.data.customer_details?.customer_phone, "Customer phone is not matching")
      setOrderDetails(response.data.order_id!, response.data.payment_session_id!)
      console.log("Orderid: ", orderId, "\npsi: ", paymentLink)
    }).catch((error) => {
      console.log(error)
    });
  };
  createOrder();
}