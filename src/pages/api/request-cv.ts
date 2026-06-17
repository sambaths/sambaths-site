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
      subject: 'Sambath S - CV',
      html: `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 24px; color: #1a1a2e;">
  <p style="font-size: 18px; margin: 0 0 24px;">Thanks for your interest.</p>
  <a href="https://drive.google.com/file/d/1nwKAXXvFtrhw5kdEm1AGB4rJV5Nfv6U5/view?usp=sharing" style="display: inline-block; padding: 12px 24px; background: #a78bfa; color: #fff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px;">Download CV</a>
  <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 32px 0 16px;" />
  <p style="margin: 0 0 4px; font-weight: 600;">Sambath S</p>
</div>`,
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
