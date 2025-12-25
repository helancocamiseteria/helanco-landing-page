# EmailJS Setup Guide for Helanco Landing Page

Follow these steps to configure EmailJS for the contact form:

## 1. Create EmailJS Account

1. Go to [https://dashboard.emailjs.com/sign-up](https://dashboard.emailjs.com/sign-up)
2. Sign up for a free account (200 emails/month)
3. Verify your email address

## 2. Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication process
5. Copy your **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: Nova Consulta - Helanco Landing Page

De: {{from_name}}
Email: {{from_email}}

Mensagem:
{{message}}

---
Esta mensagem foi enviada através do formulário de contato em helanco.com
```

4. **Template Parameters to use:**
   - `from_name` - Nome do remetente
   - `from_email` - Email do remetente
   - `message` - Mensagem
   - `to_name` - Nome do destinatário (Helanco)

5. Set the **To Email** to your company email (e.g., contato@helanco.com)
6. Click **Save** and copy your **Template ID** (e.g., `template_xyz789`)

## 4. Get Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (e.g., `AbCdEfGhIjKlMnOp`)
3. Copy it

## 5. Configure Environment Variables

Create a `.env` file in the project root:

```bash
NUXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NUXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NUXT_PUBLIC_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp
```

Replace the values with your actual IDs from EmailJS.

## 6. Security Settings (Optional but Recommended)

1. In EmailJS dashboard, go to **Account** → **Security**
2. Add your domain(s) to the **Allowed domains** list:
   - `localhost` (for development)
   - `helanco.com` (your production domain)
3. This prevents unauthorized use of your EmailJS account

## 7. Test the Form

1. Start your dev server: `npm run dev`
2. Navigate to the contact form section
3. Fill out and submit the form
4. Check your email inbox for the message
5. Check EmailJS dashboard for delivery status

## Troubleshooting

**Form shows "Configuração de e-mail não encontrada":**
- Make sure your `.env` file exists and has the correct variables
- Restart your dev server after creating/updating `.env`

**Email not received:**
- Check EmailJS dashboard for error logs
- Verify the email service is properly connected
- Check spam folder
- Ensure template is active

**Rate limiting:**
- Free tier: 200 emails/month
- Upgrade if you need more

## Production Deployment

When deploying to hosting platforms (Netlify, Vercel, etc.):

1. Add environment variables in the hosting platform's settings
2. Use the same variable names:
   - `NUXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NUXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NUXT_PUBLIC_EMAILJS_PUBLIC_KEY`
3. Redeploy your site

---

Need help? Contact EmailJS support: https://www.emailjs.com/docs/
