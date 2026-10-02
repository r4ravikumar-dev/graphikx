import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Container} from '@/components/layout/Container';
import {CtaButton} from '@/components/navigation/CtaButton';
import {statusCopy} from '@/content/navigation';

export default function NotFound() {
  const {title, description, action} = statusCopy.notFound;

  return (
    <Container size="narrow" paddingBlock={10}>
      <VStack gap={5} hAlign="center" paddingBlock={10}>
        <Heading level={1} type="display-3" justify="center">
          {title}
        </Heading>
        <Text type="large" color="secondary" justify="center">
          {description}
        </Text>
        <HStack>
          <CtaButton {...action} />
        </HStack>
      </VStack>
    </Container>
  );
}
