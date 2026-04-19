import { NextResponse } from "next/server";

type ChatPayload = {
  message?: unknown;
  session_id?: unknown;
};

export async function POST(request: Request) {
  let payload: ChatPayload;

  try {
    payload = (await request.json()) as ChatPayload;
  } catch {
    return NextResponse.json({ error: "Payload JSON invalide." }, { status: 400 });
  }

  if (typeof payload.message !== "string" || payload.message.trim().length === 0) {
    return NextResponse.json({ error: "Le champ 'message' est requis." }, { status: 400 });
  }

  const backendUrl =
    process.env.BACKEND_API_URL ??
    process.env.NEXT_PUBLIC_API_URL ??
    "http://localhost:8000";

  try {
    const backendRes = await fetch(`${backendUrl}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: payload.message,
        session_id: payload.session_id ?? null,
      }),
      cache: "no-store",
    });

    const text = await backendRes.text();
    let data: Record<string, unknown> = {};

    if (text) {
      try {
        data = JSON.parse(text) as Record<string, unknown>;
      } catch {
        return NextResponse.json({ error: "Réponse backend non-JSON." }, { status: 502 });
      }
    }

    if (!backendRes.ok) {
      const err =
        typeof data.error === "string"
          ? data.error
          : typeof data.detail === "string"
            ? data.detail
            : "Erreur backend.";
      return NextResponse.json({ error: err }, { status: backendRes.status });
    }

    if (typeof data.reply !== "string") {
      return NextResponse.json({ error: "Réponse backend invalide." }, { status: 502 });
    }

    return NextResponse.json(
      {
        reply: data.reply,
        session_id: typeof data.session_id === "string" ? data.session_id : null,
      },
      { status: 200 },
    );
  } catch (err) {
    console.error("[chat] backend unreachable", err);
    return NextResponse.json(
      { error: "Erreur serveur. Réessayez ou contactez-nous sur WhatsApp." },
      { status: 500 },
    );
  }
}
