import {VStack} from '@astryxdesign/core/Layout';
import {Text} from '@astryxdesign/core/Text';
import {statusCopy} from '@/content/navigation';

/** Shown while a page is loading. Never a generic "Loading…". */
export default function Loading() {
  return (
    <VStack gap={3} hAlign="center" paddingBlock={10} role="status">
      <Text type="supporting">{statusCopy.loading}</Text>
    </VStack>
  );
}
