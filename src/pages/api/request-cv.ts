import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const resend = new Resend(import.meta.env.RESEND_API_KEY);
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await resend.emails.send({
      from: 'Sambath S <onboarding@resend.dev>',
      to: email,
      subject: 'My CV — Sambath S',
      html: `<p>Thanks for your interest.</p><p>Here's the link to my CV: <a href="https://drive.google.com/file/d/1nwKAXXvFtrhw5kdEm1AGB4rJV5Nfv6U5/view?usp=sharing">Download CV</a></p><p>— Sambath</p>`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to send' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
