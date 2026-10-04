import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {Container} from '@/components/layout/Container';
import {IndexLabel} from '@/components/editorial/IndexLabel';
import {formatArticleMonthLong} from '@/content/articles';
import type {LegalPage} from '@/content/legal';
import {site} from '@/content/site';
import {typeRole} from '@/theme/typeScale';
import {EYEBROW_STYLE} from '@/theme/eyebrow';

const slug = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

/**
 * A short, plain-language policy page (Privacy, Terms). Read-only by design:
 * no motion, no illustration, no calls to action. The page header matches
 * the rest of the site; below it, a plain list of sections on the left and
 * numbered sections on hairlines on the right (stacked on smaller screens).
 */
export function LegalContent({page}: {page: LegalPage}) {
  return (
    <Container
      as="article"
      gap={0}
      style={{gap: 'var(--space-chapter-gap)', paddingBlock: 'var(--space-chapter-gap) var(--space-section)'}}>
      <VStack gap={6} style={{maxInlineSize: '52rem'}}>
        <IndexLabel>{page.eyebrow}</IndexLabel>
        <Heading level={1} textWrap="balance" style={{...typeRole('display-xl'), letterSpacing: '-0.03em'}}>
          {page.title}
        </Heading>
        <Text type="large" color="secondary" textWrap="pretty" style={{maxInlineSize: '44ch'}}>
          {page.intro}
        </Text>
      </VStack>

      <Grid columns={1} className="sticky-split" style={{gap: 'var(--space-block)'}}>
        <VStack gap={4} as="nav" aria-label="On this page" className="sticky-split-aside">
          <Text type="supporting" color="secondary" style={EYEBROW_STYLE}>
            Last updated <time dateTime={page.updated}>{formatArticleMonthLong(page.updated)}</time>
          </Text>
          <VStack
            gap={2}
            as="ol"
            style={{margin: 0, padding: 0, listStyle: 'none', borderBlockStart: '1px solid var(--color-border)', paddingBlockStart: 'var(--spacing-4)'}}>
            {page.sections.map((section, index) => (
              <HStack key={section.heading} as="li" gap={3} vAlign="center">
                <Text type="supporting" color="secondary" hasTabularNumbers style={{fontFamily: EYEBROW_STYLE.fontFamily}}>
                  {String(index + 1).padStart(2, '0')}
                </Text>
                <Link href={`#${slug(section.heading)}`} isStandalone>
                  {section.heading}
                </Link>
              </HStack>
            ))}
          </VStack>
        </VStack>

        <VStack gap={0} style={{borderBlockEnd: '1px solid var(--color-border)'}}>
          {page.sections.map((section, index) => (
            <VStack
              key={section.heading}
              as="section"
              id={slug(section.heading)}
              aria-labelledby={`${slug(section.heading)}-heading`}
              gap={4}
              style={{borderBlockStart: '1px solid var(--color-border)', paddingBlock: 'var(--spacing-8)'}}>
              <HStack gap={4} style={{alignItems: 'baseline'}}>
                <Text type="supporting" color="secondary" hasTabularNumbers style={{fontFamily: EYEBROW_STYLE.fontFamily, minInlineSize: '3ch'}}>
                  {String(index + 1).padStart(2, '0')}
                </Text>
                <Heading level={2} id={`${slug(section.heading)}-heading`} style={typeRole('headline-m')}>
                  {section.heading}
                </Heading>
              </HStack>
              <VStack gap={4} className="legal-body" style={{maxInlineSize: '68ch'}}>
                {section.paragraphs.map(paragraph => (
                  <Text key={paragraph} type="large" color="secondary" as="p" textWrap="pretty">
                    {paragraph}
                  </Text>
                ))}
              </VStack>
            </VStack>
          ))}
          <Text color="secondary" style={{paddingBlock: 'var(--spacing-8)'}}>
            Questions about this page? Email <Link href={`mailto:${site.email}`}>{site.email}</Link>.
          </Text>
        </VStack>
      </Grid>
    </Container>
  );
}
