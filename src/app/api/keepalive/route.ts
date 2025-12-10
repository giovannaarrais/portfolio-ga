import { db } from "@/db";
import { socialLinks } from "@/db/schema";
import { NextResponse } from "next/server";

// endpoint keep-alive
export async function GET() {
    try {
        await db.select().from(socialLinks).limit(1)

        return NextResponse.json({ ok: true })

    } catch (error: any) {
        return NextResponse.json(
            { ok:false, error: error.message},
            { status: 500 }
        )
    }
}
