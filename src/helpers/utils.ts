export function resTemplate(status: "SUCCESS" | "FAILED", message: string, data: any) {
  return {
    status,
    message,
    data,
  }
}