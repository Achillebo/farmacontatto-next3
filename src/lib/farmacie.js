import farmacieData from "@/data/farmacie.json";

export function getAllFarmacie() {
  return Object.values(farmacieData).flat();
}

// 🔥 funzione di normalizzazione (FONDAMENTALE)
export function normalize(str) {
  return (str || "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-"); // es: "Emilia Romagna" → "emilia-romagna"
}

export function getFilteredFarmacie(regione) {
  const all = getAllFarmacie();

  const regioneNorm = normalize(regione);

  // ✔ tutte
  if (regioneNorm === "italia") return all;

  // ✔ vendita
  if (regioneNorm === "vendita") {
    return all.filter(f => f.tipo_inserzione == 1);
  }

  // ✔ ricerche
  if (regioneNorm === "ricerche") {
    return all.filter(f => f.tipo_inserzione == 2);
  }

  // ✔ filtro regione (robusto)
  return all.filter(
    f => normalize(f.regione) === regioneNorm
  );
}