import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  sector?: string;
};

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Payload JSON invalide." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const sector = payload.sector?.trim() ?? "";

  if (!name || !phone || !sector) {
    return NextResponse.json(
      { error: "Tous les champs (prenom, telephone, secteur) sont obligatoires." },
      { status: 400 }
    );
  }

  console.log("[lead] Nouvelle demande", {
    name,
    phone,
    sector,
    createdAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true }, { status: 201 });
}
