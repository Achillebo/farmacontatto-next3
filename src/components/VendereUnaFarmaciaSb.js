
import { VendereUnaFarmaciaToc } from './VendereUnaFarmaciaToc';
import { AltrePagineSb } from './AltrePagineSb';
import { PharmascoutSb } from './PharmascoutSb';

export const VendereUnaFarmaciaSb = () => {
  return (
    <>
      <div className="col-md-3">
        <div className="position-sticky" style={{ top: '2rem' }}>
          <VendereUnaFarmaciaToc />
          <AltrePagineSb />
          <PharmascoutSb />
        </div>
      </div>
    </>
  )
}

export default VendereUnaFarmaciaSb;