import { NextResponse } from "next/server";
import { supabaseServer } from "../../lib/supabase-server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      service,
      address,
      city,
      zip,
      timeframe,
      description,
    } = body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !service
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    const { error } = await supabaseServer
      .from("homeowner_leads")
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          service,
          address,
          city,
          zip,
          timeframe,
          description,
          status: "New",
        },
      ]);

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to save your estimate request.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your estimate request has been received.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred.",
      },
      { status: 500 }
    );
  }
}