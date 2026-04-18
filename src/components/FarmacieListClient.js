"use client";

import Link from "next/link";

export default function FarmacieListClient({
  farmacie,
  country,
  page,
  totalPages,
}) {
  return (
    <div className="container my-4">

      <h1>Farmacie in vendita - {country}</h1>

      {/* LISTA */}
      <div className="row">
        {farmacie.map((f) => (
          <div className="col-12 mb-3" key={f.rif_farm}>
            <div className="card p-3">
              <h3>{f.titolo_inserzione}</h3>
              <p>{f.testo_inserzione}</p>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINAZIONE */}
      <div className="d-flex gap-2 justify-content-center mt-4">

        {page > 1 && (
          <Link
            className="btn btn-outline-primary"
            href={`/farmacie-in-vendita/${country}?page=${page - 1}`}
          >
            ← Prev
          </Link>
        )}

        <span className="px-3 py-2">
          Pagina {page} / {totalPages}
        </span>

        {page < totalPages && (
          <Link
            className="btn btn-outline-primary"
            href={`/farmacie-in-vendita/${country}?page=${page + 1}`}
          >
            Next →
          </Link>
        )}

      </div>
    </div>
  );
}