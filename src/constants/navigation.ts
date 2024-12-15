import { LayoutDashboard, FolderKanban, FileInput, UserCircle } from 'lucide-react';

export const MENU_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: FolderKanban, label: 'Portfolio', path: '/portfolio' },
  { icon: FileInput, label: 'Inputs', path: '/inputs' },
  { icon: UserCircle, label: 'Profile', path: '/profile' },
] as const;

export const NAV_TABS = ['Project', 'Saved', 'Shared', 'Achievement'] as const;