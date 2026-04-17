import { ComprareUnaFarmaciaToc } from './ComprareUnaFarmaciaToc';
import { PharmascoutSb } from './PharmascoutSb';
import { AltrePagineSb } from './AltrePagineSb';

export const ComprareUnaFarmaciaSb = () => {
  return (
    <>
      <div className="col-md-3">
        <div className="position-sticky" style={{ top: '2rem' }}>

          <ComprareUnaFarmaciaToc />
          <AltrePagineSb />
          <PharmascoutSb />
        
        </div>
      </div>
    </>
  )
}

export default ComprareUnaFarmaciaSb;