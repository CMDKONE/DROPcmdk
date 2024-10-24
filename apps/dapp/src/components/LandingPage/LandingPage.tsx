import { Drops } from '@/examples/Drop';
import { SectionDeluxe } from './SectionDeluxe';
import { SectionFAQ } from './SectionFAQ';
import { SectionGateway } from './SectionGateway';
import { SectionHeader } from './SectionHeader';
import { SectionLatestDrops } from './SectionLatestDrops';

export const LandingPage = () => {
  return (
    <div className="relative overflow-hidden pt-20">
      <SectionHeader />
      <SectionDeluxe />
      <SectionLatestDrops latestDrops={Drops} />
      <SectionGateway />
      <SectionFAQ />
    </div>
  );
};
