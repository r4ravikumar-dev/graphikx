'use client';

import type {MouseEvent} from 'react';
import {usePathname} from 'next/navigation';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {MobileNav} from '@astryxdesign/core/MobileNav';
import {Link} from '@astryxdesign/core/Link';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Heading';
import {Divider} from '@astryxdesign/core/Divider';
import {useAppShellMobile} from '@astryxdesign/core/AppShell';
import {CtaButton} from '@/components/navigation/CtaButton';
import {Reveal} from '@/components/motion/Reveal';
import {mobileMenu, navLinks, projectAction} from '@/content/navigation';
import {isActivePath} from './isActivePath';

/** The mobile drawer: "Explore Graphikx", each section with a short description, then the project CTA. */
export function MobileMenu() {
  const pathname = usePathname();
  const {closeMobileNav} = useAppShellMobile();

  // Any link inside the drawer navigates, so close the drawer when one is clicked.
  function closeOnLinkClick(event: MouseEvent) {
    if ((event.target as HTMLElement).closest('a')) closeMobileNav();
  }

  return (
    <MobileNav header={mobileMenu.title}>
      <VStack gap={6} paddingBlock={4} paddingInline={2} onClickCapture={closeOnLinkClick}>
        <VStack gap={5} as="ul" role="list">
          {navLinks.map((item, index) => {
            const isActive = isActivePath(pathname, item.href);
            return (
              <Reveal key={item.href} as="li" delay={0.04 * index} distance={12} speed="fast" gap={0.5}>
                <Link
                  href={item.href}
                  isStandalone
                  aria-current={isActive ? 'page' : undefined}>
                  <HStack gap={1} vAlign="center" as="span">
                    <Heading level={3}>
                      {item.label}
                    </Heading>
                    {isActive && (
                      <Text type="large" color="accent" aria-hidden>
                        ·
                      </Text>
                    )}
                  </HStack>
                </Link>
                <Text type="supporting">{item.mobileDescription}</Text>
              </Reveal>
            );
          })}
        </VStack>

        <Divider />

        <VStack gap={3} hAlign="start">
          <Text type="supporting">{mobileMenu.prompt}</Text>
          <CtaButton label={projectAction.label} href={projectAction.href} direction="out" size="md" />
        </VStack>
      </VStack>
    </MobileNav>
  );
}
