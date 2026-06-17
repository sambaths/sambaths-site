import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { error: sendError } = await resend.emails.send({
      from: 'Sambath S <hello@sambaths.com>',
      to: email,
      subject: 'My CV — Sambath S',
      html: `<p>Thanks for your interest.</p><p>Here's the link to my CV: <a href="https://drive.google.com/file/d/1nwKAXXvFtrhw5kdEm1AGB4rJV5Nfv6U5/view?usp=sharing">Download CV</a></p><p>— Sambath</p>`,
    });

    if (sendError) {
      return new Response(JSON.stringify({ error: String(sendError) }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
