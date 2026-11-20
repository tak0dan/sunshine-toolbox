import {
  SunshineDusk,
  SunshineEmber,
  SunshineMidnight,
  SunshineNoon,
  SunshineXtermJs,
} from './sunshine-themes/index.js';
import type { Preset } from '@openng/optimus-ui-themes/types';

export const themes: AppThemes = {
  'Sunshine Noon': SunshineNoon,
  'Sunshine Ember': SunshineEmber,
  'Sunshine Dusk': SunshineDusk,
  'Sunshine Midnight': SunshineMidnight,
};

export type AppTheme = 'Sunshine Noon' | 'Sunshine Ember' | 'Sunshine Dusk' | 'Sunshine Midnight';

export type AppThemes = Record<string, Preset>;

export const editionThemeMap: Record<string, AppTheme> = {
  sunshine: 'Sunshine Noon',
  hyprland: 'Sunshine Ember',
  plasma: 'Sunshine Dusk',
};

export const SunshineTerminalTheme = SunshineXtermJs;
