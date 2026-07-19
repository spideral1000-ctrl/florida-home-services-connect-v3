import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      company_name,
      contact_name,
      email,
      phone,
      website,
      service,
      service_areas,
      license_number,
      plan,
    } = body;

    const { data, error } = await supabaseAdmin
      .from("contractors")
      .insert([
        {
          company_name,
          contact_name,
          email,
          phone,
          website,
          service,
          service_areas,
          license_number,
          plan,
          status: "Pending",
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase Error:", error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      contractor: data,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}