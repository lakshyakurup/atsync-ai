const REGION = process.env.AWS_REGION ?? "us-east-1";
const BUCKET = process.env.AWS_S3_BUCKET ?? "";

export interface S3ClientConfig {
  region: string;
  bucket: string;
  accessKeyId?: string;
  secretAccessKey?: string;
}

export function getS3ClientConfig(): S3ClientConfig {
  return {
    region: REGION,
    bucket: BUCKET,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  };
}

export async function uploadPdfToS3Stub(file: File) {
  const key = `resumes/${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
  return {
    key,
    bucket: BUCKET,
    region: REGION,
    contentType: file.type,
    note: "Stub upload result. Replace with AWS SDK PutObject command.",
  };
}
