export function readingTime(body: string): number {
  if (!body.trim()) return 0;
  const wordCount = body.trim().split(/\s+/).length;
  return Math.ceil(wordCount / 160);
}
