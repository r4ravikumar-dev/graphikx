import {
  Boxes,
  Compass,
  LayoutDashboard,
  MousePointerClick,
  Palette,
  Route,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export const capabilityIcons: Record<string, LucideIcon> = {
  'product-design': Compass,
  'ux-design': Route,
  'ui-design': Palette,
  'interaction-design': MousePointerClick,
  'ux-flow-revamp': Workflow,
  'no-code-design': Boxes,
  'saas-product-design': LayoutDashboard,
};
