import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Debashis Das | Consultant Physician & Diabetologist — Medicare Hospital, Marol Naka',
  description: 'Dr. Debashis Das — MBBS, MD Pharmacology (AIIMS), PGP Diabetology (USA), MBA (UK). Consultant Physician & Diabetologist at Medicare Hospital, Marol Naka. Expert in Type 2 Diabetes, metabolic disorders, hypertension. Book online or in-person.',
  keywords: [
    'Diabetologist Marol Naka',
    'Consultant Physician Andheri',
    'diabetes doctor Mumbai',
    'Medicare Hospital doctor',
    'AIIMS doctor Mumbai',
    'Type 2 diabetes specialist Mumbai',
    'HbA1c specialist',
    'metabolic disorder doctor Mumbai',
    'online diabetes consultation India',
  ],
  openGraph: {
    title: 'Dr. Debashis Das | Consultant Physician & Diabetologist — Medicare Hospital',
    description: 'AIIMS-trained Consultant Physician and Diabetologist at Medicare Hospital, Marol Naka. MBBS, MD (Pharmacology) AIIMS, PGP Diabetology (USA), MBA (UK).',
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
              description: 'Consultant Physician and Diabetologist at Medicare Hospital, Marol Naka',
              medicalSpecialty: ['Diabetology', 'Internal Medicine', 'Clinical Pharmacology'],
              hasCredential: [
                { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'MBBS' },
                { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'MD (Pharmacology)', recognizedBy: { '@type': 'Organization', name: 'AIIMS New Delhi' } },
                { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certificate', name: 'PGP Diabetology (USA)' },
                { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'MBA (UK)' },
              ],
              worksFor: {
                '@type': 'Hospital',
                name: 'Medicare Hospital',
                address: { '@type': 'PostalAddress', streetAddress: 'Marol Naka, next to HP Petrol Pump', addressLocality: 'Andheri East', addressRegion: 'Maharashtra', addressCountry: 'IN' },
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
