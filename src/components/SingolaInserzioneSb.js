import { Ritorna } from './Ritorna';
import { PharmascoutSb } from './PharmascoutSb';
import { RegioniSb } from './RegioniSb';

export const SingolaInserzioneSb = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center text-center w-100">
          <Ritorna />
          {/* 
           */}
           <RegioniSb />
          <PharmascoutSb />
        </div>
    </>
  )
}

export default SingolaInserzioneSb;