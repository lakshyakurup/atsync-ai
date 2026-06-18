import { NextResponse } from "next/server";
import { uploadPdfToS3Stub } from "@/lib/aws";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "Missing file field in multipart form-data." },
        { status: 400 },
      );
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Only PDF files are supported." },
        { status: 400 },
      );
    }

    const upload = await uploadPdfToS3Stub(file);

    return NextResponse.json(
      {
        message: "Multipart parsing complete. Replace stub with S3 upload flow.",
        upload,
      },
      { status: 200 },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upload failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
