import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Payload JSON invalide." }, { status: 400 });
  }

  try {
    const backendUrl =
      process.env.BACKEND_API_URL ??
      process.env.NEXT_PUBLIC_API_URL ??
      "http://localhost:8000";
    const res = await fetch(`${backendUrl}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json()) as Record<string, unknown>;
    return NextResponse.json(data, { status: res.ok ? 201 : res.status });
  } catch (err) {
    console.error("[contact] backend unreachable", err);
    return NextResponse.json({ error: "Erreur serveur. Réessayez ou appelez-nous." }, { status: 500 });
  }
}
