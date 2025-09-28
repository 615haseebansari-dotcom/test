import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone?: string;
  service: string;
  message: string;
  timestamp: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { firstName, lastName, email, company, phone, service, message, timestamp }: ContactFormData = await req.json()

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !service || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Create email content
    const emailSubject = `Neue Kontaktanfrage von WolkenBunker Website - ${firstName} ${lastName}`
    const emailBody = `
Neue Kontaktanfrage über die WolkenBunker Website:

KONTAKTDATEN:
- Name: ${firstName} ${lastName}
- E-Mail: ${email}
- Unternehmen: ${company}
- Telefon: ${phone || 'Nicht angegeben'}
- Service: ${service}

NACHRICHT:
${message}

TECHNISCHE DETAILS:
- Zeitstempel: ${timestamp}
- IP-Adresse: ${req.headers.get('x-forwarded-for') || 'Unbekannt'}
- User-Agent: ${req.headers.get('user-agent') || 'Unbekannt'}

---
Diese Nachricht wurde automatisch über das Kontaktformular auf wolkenbunker.com gesendet.
`

    // Send email using Resend API
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not found')
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'WolkenBunker Website <noreply@wolkenbunker.com>',
        to: ['info@wolkenbunker.de'],
        subject: emailSubject,
        text: emailBody,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #9333ea, #3b82f6); padding: 20px; color: white; margin-bottom: 20px;">
              <h1 style="margin: 0; font-size: 24px;">Neue Kontaktanfrage</h1>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">WolkenBunker Website</p>
            </div>
            
            <div style="background: #f8fafc; padding: 20px; margin-bottom: 20px; border-left: 4px solid #9333ea;">
              <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px;">Kontaktdaten</h2>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p style="margin: 5px 0;"><strong>E-Mail:</strong> <a href="mailto:${email}" style="color: #9333ea;">${email}</a></p>
              <p style="margin: 5px 0;"><strong>Unternehmen:</strong> ${company}</p>
              <p style="margin: 5px 0;"><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
              <p style="margin: 5px 0;"><strong>Service:</strong> ${service}</p>
            </div>
            
            <div style="background: white; padding: 20px; border: 1px solid #e5e7eb;">
              <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px;">Nachricht</h2>
              <p style="margin: 0; line-height: 1.6; color: #374151;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #f3f4f6; font-size: 12px; color: #6b7280;">
              <p style="margin: 0;"><strong>Zeitstempel:</strong> ${timestamp}</p>
              <p style="margin: 5px 0 0 0;">Diese Nachricht wurde über das Kontaktformular auf wolkenbunker.com gesendet.</p>
            </div>
          </div>
        `
      }),
    })

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text()
      console.error('Resend API error:', errorText)
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const emailResult = await emailResponse.json()
    console.log('Email sent successfully:', emailResult)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        emailId: emailResult.id 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error in send-email function:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})