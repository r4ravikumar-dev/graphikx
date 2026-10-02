'use client';

import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {Icon} from '@astryxdesign/core/Icon';
import {Divider} from '@astryxdesign/core/Divider';
import {VisuallyHidden} from '@astryxdesign/core/VisuallyHidden';
import {ArrowUpRight} from 'lucide-react';
import {Container} from './Container';
import {CtaButton} from '@/components/navigation/CtaButton';
import {Wordmark} from '@/components/navigation/Wordmark';
import {Lines} from '@/components/storytelling/Lines';
import {Reveal} from '@/components/motion/Reveal';
import {footer} from '@/content/footer';
import {site} from '@/content/site';

function ColumnTitle({children}: {children: string}) {
  return (
    <Text
      type="label"
      color="secondary"
      style={{textTransform: 'uppercase', letterSpacing: '0.08em'}}>
      {children}
    </Text>
  );
}

/** A footer link marked with ↗, e.g. LinkedIn or Email. */
function OutboundLink({
  href,
  label,
  opensNewTab,
}: {
  href: string;
  label: string;
  opensNewTab?: boolean;
}) {
  return (
    <Link href={href} isStandalone target={opensNewTab ? '_blank' : undefined}>
      <HStack gap={1} vAlign="center" as="span">
        {label}
        <Icon icon={ArrowUpRight} size="sm" color="inherit" />
        {opensNewTab && <VisuallyHidden>(opens in new tab)</VisuallyHidden>}
      </HStack>
    </Link>
  );
}

/** The site-wide footer (copy in content/footer.ts). */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Section variant="muted" padding={0} paddingBlock={10} dividers={['top']}>
      <Container gap={10} paddingBlock={4}>
        {/* 4 columns on desktop, 2 on tablet, 1 on mobile (see .footer-columns in globals.css). */}
        <Grid columns={4} gap={8} className="footer-columns">
          {/* Brand: logo and statement */}
          <Reveal gap={3} hAlign="start">
            <Wordmark height={32} />
            <Heading level={2} type="display-3">
              {footer.statement}
            </Heading>
            <Text color="secondary" textWrap="pretty">
              {footer.description}
            </Text>
          </Reveal>

          {/* Explore */}
          <VStack gap={4} as="nav" aria-label={footer.explore.title}>
            <ColumnTitle>{footer.explore.title}</ColumnTitle>
            {footer.explore.links.map(item => (
              <VStack key={item.href} gap={0.5}>
                <Link href={item.href} isStandalone>
                  {item.label}
                </Link>
                <Text type="supporting">{item.hint}</Text>
              </VStack>
            ))}
          </VStack>

          {/* Work with us */}
          <VStack gap={4} hAlign="start">
            <ColumnTitle>{footer.workWithUs.title}</ColumnTitle>
            <CtaButton {...footer.workWithUs.action} size="md" direction="out" />
            <Text type="supporting" textWrap="balance">
              {footer.workWithUs.microcopy}
            </Text>
          </VStack>

          {/* Find us */}
          <VStack gap={4}>
            <ColumnTitle>{footer.connect.title}</ColumnTitle>
            {site.linkedinUrl && (
              <OutboundLink href={site.linkedinUrl} label="LinkedIn" opensNewTab />
            )}
            <OutboundLink href={`mailto:${site.email}`} label="Email" />
          </VStack>
        </Grid>

        <VStack gap={6}>
          <Divider />
          {/* Footer meta */}
          <HStack gap={6} justify="between" vAlign="center" wrap="wrap">
            <Text type="supporting">
              {site.name} © {year}
            </Text>
            <HStack gap={5} as="nav" aria-label="Legal">
              {footer.legal.map(item => (
                <Link key={item.href} href={item.href} isStandalone>
                  <Text type="supporting" color="inherit">
                    {item.label}
                  </Text>
                </Link>
              ))}
            </HStack>
          </HStack>

          {/* Final brand line */}
          <Text type="large" weight="semibold">
            <Lines text={footer.closing} />
          </Text>
        </VStack>
      </Container>
    </Section>
  );
}
