import { Ritorna } from "./Ritorna";
import { PharmascoutSb } from "./PharmascoutSb";
import { RegioniSb } from "./RegioniSb";
import { AltrePagineSb } from "./AltrePagineSb";

export default function FarmacieInVenditaSb() {
  return (
    <div className="position-sticky" style={{ top: "6rem" }}>
      <Ritorna />
      <RegioniSb />
      <PharmascoutSb />
      <AltrePagineSb />
    </div>
  );
}