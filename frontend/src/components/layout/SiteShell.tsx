'use client';

import {AppShell} from '@astryxdesign/core/AppShell';
import {VStack} from '@astryxdesign/core/Layout';
import {MainNav} from '@/components/navigation/MainNav';
import {MobileMenu} from '@/components/navigation/MobileMenu';
import {PageTransition} from '@/components/navigation/PageTransition';
import {CustomCursor} from '@/components/navigation/CustomCursor';
import {Footer} from './Footer';

/**
 * Page frame from the Astryx "shell-top-nav" template: AppShell with a TopNav.
 * AppShell provides the skip link and the <main> landmark. Below the mobile
 * breakpoint, MainNav shows its own "Menu" toggle and MobileMenu fills the drawer.
 */
export function SiteShell({children}: {children: React.ReactNode}) {
  return (
    <>
      <AppShell
        variant="surface"
        height="auto"
        topNav={<MainNav />}
        mobileNav={{hasToggle: false, content: <MobileMenu />}}>
        <VStack gap={0}>
          {children}
          <Footer />
        </VStack>
      </AppShell>
      <PageTransition />
      <CustomCursor />
    </>
  );
}
