import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Panier Perdu — Récupère les paniers abandonnés de ta boutique",
  description:
    "Relances automatiques et personnalisées pour les petites boutiques Shopify et WooCommerce. 29€/mois, relances illimitées.",
  openGraph: {
    title: "Panier Perdu — Récupère les paniers abandonnés de ta boutique",
    description:
      "Relances automatiques et personnalisées pour les petites boutiques. 29€/mois, relances illimitées.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-serif">{children}</body>
    </html>
  );
}
