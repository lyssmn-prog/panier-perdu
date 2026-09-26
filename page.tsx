export default function Success() {
  return (
    <main className="min-h-screen bg-ink text-cream flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="w-full max-w-[480px]">
        <p className="text-sage text-sm mb-6">Panier Perdu</p>
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6">
          C'est payé. Merci.
        </h1>
        <p className="text-slateink text-lg">
          Tu vas recevoir un email dans les prochaines minutes avec l'accès à
          ton compte. Si rien n'arrive d'ici une heure, écris-nous.
        </p>
      </div>
    </main>
  );
}
