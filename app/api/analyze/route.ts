import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });
    
    // just to check if the key is available
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash",
      contents: "say hello",
    });

    return NextResponse.json({ ok: true, text: response.text });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error.message });
  }
}
