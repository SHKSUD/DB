import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://drdebashisdas.com";

export const BASE_METADATA: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Dr. Debashis Das | Consultant Physician & Diabetologist — AIIMS New Delhi",
    template: "%s | Dr. Debashis Das",
  },
  description:
    "Dr. Debashis Das is a Consultant Physician and Diabetologist trained at AIIMS New Delhi. Expert in Type 2 Diabetes, metabolic disorders, hypertension, and precision medicine. Book online video or in-person consultations.",
  keywords: [
    "Diabetologist Delhi",
    "Consultant Physician AIIMS",
    "diabetes doctor Delhi",
    "Type 2 diabetes specialist",
    "blood sugar doctor",
    "HbA1c specialist",
    "metabolic disorder doctor",
    "online diabetes consultation India",
    "AIIMS physician",
    "internal medicine specialist Delhi",
  ],
  authors: [{ name: "Dr. Debashis Das" }],
  creator: "Dr. Debashis Das",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Dr. Debashis Das",
    title: "Dr. Debashis Das | Consultant Physician & Diabetologist",
    description:
      "AIIMS-trained Consultant Physician and Diabetologist. Expert management of diabetes, hypertension, and metabolic disorders. Book online or in-person.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Dr. Debashis Das" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Debashis Das | Consultant Physician & Diabetologist",
    description:
      "AIIMS-trained Diabetologist & Consultant Physician. Book online consultations for diabetes, metabolic disorders & internal medicine.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: BASE_URL },
};

// ── JSON-LD schemas ───────────────────────────────────────────────────────────
export const PHYSICIAN_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Debashis Das",
  description: "Consultant Physician and Diabetologist trained at AIIMS New Delhi",
  url: BASE_URL,
  medicalSpecialty: ["Diabetology", "Internal Medicine", "Clinical Pharmacology"],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "All India Institute of Medical Sciences, New Delhi",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "MD — Clinical Pharmacology",
    recognizedBy: { "@type": "Organization", name: "AIIMS New Delhi" },
  },
  availableService: [
    { "@type": "MedicalTherapy", name: "Diabetes Management" },
    { "@type": "MedicalTherapy", name: "Hypertension Treatment" },
    { "@type": "MedicalTherapy", name: "Metabolic Disorder Consultation" },
    { "@type": "MedicalTherapy", name: "Clinical Pharmacology Review" },
  ],
  offers: [
    { "@type": "Offer", name: "Video Consultation", price: "800", priceCurrency: "INR" },
    { "@type": "Offer", name: "In-Person Visit",    price: "1200", priceCurrency: "INR" },
    { "@type": "Offer", name: "Report Review",      price: "500",  priceCurrency: "INR" },
  ],
};

export const CONDITIONS_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When should I see a diabetologist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You should see a diabetologist if your blood sugar or HbA1c is not under control despite medication, if you have been newly diagnosed with diabetes, if you experience frequent hypoglycaemic episodes, or if you have diabetic complications such as neuropathy or retinopathy.",
      },
    },
    {
      "@type": "Question",
      name: "What is HbA1c and what should my level be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HbA1c (glycated haemoglobin) reflects your average blood sugar over the past 2–3 months. For most adults with diabetes, a target below 7% is recommended. Dr. Das will personalise this target based on your age, history, and complications.",
      },
    },
    {
      "@type": "Question",
      name: "Can I consult Dr. Das online for diabetes management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dr. Das offers 30-minute video consultations, asynchronous report reviews, and in-person visits. All modes are available for booking at drdebashisdas.com/book.",
      },
    },
    {
      "@type": "Question",
      name: "Does Dr. Das handle both Type 1 and Type 2 diabetes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Dr. Das manages Type 1, Type 2, gestational diabetes, and insulin-dependent cases with complex regimens including continuous glucose monitoring (CGM) guidance.",
      },
    },
    {
      "@type": "Question",
      name: "What metabolic conditions does Dr. Das treat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Das treats thyroid disorders, obesity, high cholesterol, PCOS, fatty liver (NAFLD), vitamin deficiencies, gout, and other metabolic conditions alongside his core diabetology practice.",
      },
    },
  ],
};

export function articleSchema(article: {
  title: string;
  slug: string;
  publishedAt: string;
  seoDescription: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: article.title,
    description: article.seoDescription,
    url: `${BASE_URL}/articles/${article.slug}`,
    datePublished: article.publishedAt,
    author: {
      "@type": "Physician",
      name: "Dr. Debashis Das",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Dr. Debashis Das",
      url: BASE_URL,
    },
    medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
  };
}
