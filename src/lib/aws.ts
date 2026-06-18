export interface S3UploadRequest {
  fileName: string;
  contentType: string;
}

export interface S3UploadResponse {
  uploadUrl: string;
  fileUrl: string;
}

export async function getS3UploadHandler(
  payload: S3UploadRequest,
): Promise<S3UploadResponse> {
  const endpoint = process.env.NEXT_PUBLIC_S3_UPLOAD_ENDPOINT;

  if (!endpoint) {
    throw new Error("NEXT_PUBLIC_S3_UPLOAD_ENDPOINT is not configured");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to initialize S3 upload");
  }

  return (await response.json()) as S3UploadResponse;
}
