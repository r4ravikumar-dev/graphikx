import {VStack} from '@astryxdesign/core/Layout';
import {EditorialHero} from '@/components/editorial/EditorialHero';
import {QuestionPath} from '@/components/illustrations/scenes';
import {statusCopy} from '@/content/navigation';

export default function NotFound() {
  const {title, description, action} = statusCopy.notFound;

  return (
    <VStack gap={0} style={{paddingBlockEnd: 'var(--space-section)'}}>
      <EditorialHero
        label="404"
        title={title}
        description={description}
        action={action}
        illustration={<QuestionPath />}
      />
    </VStack>
  );
}
