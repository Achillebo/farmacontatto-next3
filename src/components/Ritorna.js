"use client";

import { useRouter } from "next/navigation";

export const Ritorna = () => {
  const router = useRouter();

  return (
    <div className="p-3 bg-body-tertiary rounded text-center d-flex flex-column align-items-center">

      <h4 className="fst-italic">Navigazione</h4>

      <button
        type="button"
        className="btn btn-warning btn-md mt-2"
        onClick={() => {
          if (window.history.length > 1) {
            router.back();
          } else {
            router.push("/");
          }
        }}
      >
        Ritorna alla pagina precedente
      </button>

    </div>
  );
};

export default Ritorna;