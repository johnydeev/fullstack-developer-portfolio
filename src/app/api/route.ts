import { NextResponse } from "next/server";
import {connectDB} from "@/utils/connectDB";

connectDB()

export function GET() {

    return NextResponse.json({
        message: 'Hello from the API'
    })

}   