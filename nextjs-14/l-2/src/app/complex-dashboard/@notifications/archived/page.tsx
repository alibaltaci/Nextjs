import Card from '@/components/card';
import Link from 'next/link';

const ArchivedNotification = () => {
  return (
    <Card>
      <div>Archived Notification</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
};

export default ArchivedNotification;