export async function GET(request: Request) {
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.text();
  return new Response(data.trim(), {
    status: 200,
  });
}
