import CompravenditaFarmacieToc from '@/components/CompravenditaFarmacieToc';
import AltrePagineSb from '@/components/AltrePagineSb';
import PharmascoutSb from '@/components/PharmascoutSb';

export const CompravenditaFarmacieSb = () => {
  return (
    <div className="sticky-sidebar">
      <CompravenditaFarmacieToc />
      <AltrePagineSb />
      <PharmascoutSb />
    </div>
  );
};

export default CompravenditaFarmacieSb;