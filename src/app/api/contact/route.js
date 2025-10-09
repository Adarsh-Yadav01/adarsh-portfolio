// app/api/contact/route.js
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use 'smtp.gmail.com'
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASSWORD, // Your Gmail App Password
      },
    })

    // Email to yourself (notification)
    const mailOptionsToSelf = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email to receive contact form submissions
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>From:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Message:</h3>
            <p style="white-space: pre-wrap; color: #1f2937;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
    }

    // Auto-reply to the person who contacted you
    const mailOptionsToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for reaching out!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Thank You for Contacting Me!
          </h2>
          
          <p style="color: #374151; line-height: 1.6;">Hi ${name},</p>
          
          <p style="color: #374151; line-height: 1.6;">
            Thank you for reaching out! I've received your message regarding "<strong>${subject}</strong>" 
            and I'll get back to you within 24 hours.
          </p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Your Message:</h3>
            <p style="white-space: pre-wrap; color: #1f2937;">${message}</p>
          </div>
          
          <p style="color: #374151; line-height: 1.6;">
            Looking forward to discussing your project!
          </p>
          
          <p style="color: #374151; line-height: 1.6;">
            Best regards,<br>
            <strong>Adarsh Yadav</strong>
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await transporter.sendMail(mailOptionsToSelf)
    await transporter.sendMail(mailOptionsToSender)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error.message 
      },
      { status: 500 }
    )
  }
}