import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Debashis Das | Consultant Physician & Diabetologist — AIIMS New Delhi',
  description:
    'Dr. Debashis Das is a Consultant Physician and Diabetologist trained at AIIMS New Delhi. Expert in Type 2 Diabetes, metabolic disorders, hypertension, and precision medicine. Book online video or in-person consultations.',
  keywords: [
    'Diabetologist Delhi',
    'Consultant Physician AIIMS',
    'diabetes doctor Delhi',
    'Type 2 diabetes specialist',
    'HbA1c specialist',
    'metabolic disorder doctor',
    'online diabetes consultation India',
  ],
  openGraph: {
    title: 'Dr. Debashis Das | Consultant Physician & Diabetologist',
    description:
      'AIIMS-trained Consultant Physician and Diabetologist. Expert management of diabetes, hypertension, and metabolic disorders.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Physician',
              name: 'Dr. Debashis Das',
              description:
                'Consultant Physician and Diabetologist trained at AIIMS New Delhi',
              medicalSpecialty: ['Diabetology', 'Internal Medicine', 'Clinical Pharmacology'],
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'All India Institute of Medical Sciences, New Delhi',
              },
              availableService: [
                { '@type': 'MedicalTherapy', name: 'Diabetes Management' },
                { '@type': 'MedicalTherapy', name: 'Hypertension Treatment' },
                { '@type': 'MedicalTherapy', name: 'Metabolic Disorder Consultation' },
              ],
            }),
          }}
        />
      <script src="https://checkout.razorpay.com/v1/checkout.js" />
      </head>
      <body>{children}</body>
    </html>
  )
}
