import type {ReactNode} from 'react';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {Container} from '@/components/layout/Container';
import {IndexLabel} from '@/components/editorial/IndexLabel';
import {Lines} from '@/components/storytelling/Lines';
import {formatArticleMonthLong} from '@/content/articles';
import type {LegalBlock, LegalPage} from '@/content/legal';
import {site} from '@/content/site';
import {typeRole} from '@/theme/typeScale';
import {EYEBROW_STYLE} from '@/theme/eyebrow';

const slug = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const number = (index: number) => String(index + 1).padStart(2, '0');

/** One block of a section, styled for comfortable reading. */
function Block({block}: {block: LegalBlock}) {
  switch (block.kind) {
    case 'h':
      return (
        <Heading
          level={3}
          style={{...typeRole('headline-s'), marginBlockStart: 'var(--spacing-2)'}}>
          {block.text}
        </Heading>
      );
    case 'p':
      return (
        <Text type="large" color="secondary" as="p" textWrap="pretty">
          {block.text}
        </Text>
      );
    case 'list':
      return (
        <VStack as="ul" gap={2} className="legal-list">
          {block.items.map(item => (
            <VStack key={item} as="li" gap={0}>
              <Text type="large" color="secondary" textWrap="pretty">
                {item}
              </Text>
            </VStack>
          ))}
        </VStack>
      );
    case 'note':
      return (
        <Text
          as="p"
          textWrap="pretty"
          className="legal-note"
          style={{...typeRole('headline-s'), fontWeight: 500}}>
          {block.text}
        </Text>
      );
    case 'email':
      return (
        <HStack gap={3} vAlign="center">
          <Text type="supporting" color="secondary" style={EYEBROW_STYLE}>
            Email
          </Text>
          <Link href={`mailto:${site.email}`}>{site.email}</Link>
        </HStack>
      );
  }
}

/**
 * A plain-language policy page (Privacy, Terms), read like a document. The
 * header matches the rest of the site, with the page's illustration on the
 * right (below the text on smaller screens, .legal-header in globals.css).
 * Below it, a sticky contents list on the left and the numbered sections on
 * hairlines on the right: subheadings, paragraphs, lists with brand-blue
 * markers and short callouts in plain words. A closing statement ends it.
 */
export function LegalContent({page, illustration}: {page: LegalPage; illustration?: ReactNode}) {
  return (
    <Container
      as="article"
      gap={0}
      style={{
        gap: 'var(--space-chapter-gap)',
        paddingBlock: 'var(--space-chapter-gap) var(--space-section)',
      }}>
      <Grid columns={1} gap={10} className="legal-header">
        <VStack gap={6} style={{maxInlineSize: '52rem'}}>
          <IndexLabel>{page.eyebrow}</IndexLabel>
          <Heading
            level={1}
            textWrap="balance"
            style={{...typeRole('display-xl'), letterSpacing: '-0.03em'}}>
            {page.title}
          </Heading>
          <Text type="large" color="secondary" textWrap="pretty" style={{maxInlineSize: '48ch'}}>
            {page.intro}
          </Text>
        </VStack>
        {illustration && <VStack className="legal-header-art">{illustration}</VStack>}
      </Grid>

      <Grid columns={1} className="sticky-split" style={{gap: 'var(--space-block)'}}>
        <VStack gap={4} as="nav" aria-label="On this page" className="sticky-split-aside">
          <Text type="supporting" color="secondary" style={EYEBROW_STYLE}>
            Last updated <time dateTime={page.updated}>{formatArticleMonthLong(page.updated)}</time>
          </Text>
          <VStack
            gap={2}
            as="ol"
            style={{
              margin: 0,
              padding: 0,
              listStyle: 'none',
              borderBlockStart: '1px solid var(--color-border)',
              paddingBlockStart: 'var(--spacing-4)',
            }}>
            {page.sections.map((section, index) => (
              <HStack key={section.heading} as="li" gap={3} vAlign="center">
                <Text
                  type="supporting"
                  color="secondary"
                  hasTabularNumbers
                  style={{fontFamily: EYEBROW_STYLE.fontFamily}}>
                  {number(index)}
                </Text>
                <Link href={`#${slug(section.heading)}`} isStandalone>
                  {section.heading}
                </Link>
              </HStack>
            ))}
          </VStack>
        </VStack>

        <VStack gap={0}>
          {page.sections.map((section, index) => (
            <VStack
              key={section.heading}
              as="section"
              id={slug(section.heading)}
              aria-labelledby={`${slug(section.heading)}-heading`}
              gap={4}
              style={{
                borderBlockStart: '1px solid var(--color-border)',
                paddingBlock: 'var(--spacing-8) var(--spacing-10)',
              }}>
              <HStack gap={4} style={{alignItems: 'baseline'}}>
                <Text
                  type="supporting"
                  hasTabularNumbers
                  style={{
                    fontFamily: EYEBROW_STYLE.fontFamily,
                    minInlineSize: '3ch',
                    color: 'var(--color-brand-text)',
                  }}>
                  {number(index)}
                </Text>
                <Heading
                  level={2}
                  id={`${slug(section.heading)}-heading`}
                  style={typeRole('headline-m')}>
                  {section.heading}
                </Heading>
              </HStack>
              <VStack gap={4} className="legal-body" style={{maxInlineSize: '68ch'}}>
                {section.blocks.map((block, blockIndex) => (
                  <Block key={blockIndex} block={block} />
                ))}
              </VStack>
            </VStack>
          ))}

          <VStack
            gap={4}
            className="legal-body"
            style={{
              borderBlockStart: '1px solid var(--color-border)',
              paddingBlockStart: 'var(--spacing-10)',
              maxInlineSize: '68ch',
            }}>
            <Heading
              level={2}
              textWrap="balance"
              style={{...typeRole('display-m'), letterSpacing: '-0.02em'}}>
              <Lines text={page.closing.title} />
            </Heading>
            {page.closing.text.map(line => (
              <Text key={line} type="large" color="secondary" textWrap="pretty">
                {line}
              </Text>
            ))}
          </VStack>
        </VStack>
      </Grid>
    </Container>
  );
}
