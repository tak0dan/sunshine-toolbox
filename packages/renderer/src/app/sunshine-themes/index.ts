/**
 * Sunshine OS themes for Sunshine Toolbox.
 *
 * Palette (from Sunshine OS branding):
 *   pale sun #fff2b8, soft gold #ffd25c, sun orange #ffb12e,
 *   ember #ff8a3a, deep ember #d9531e, deep indigo #151024.
 */
import { definePreset } from '@openng/optimus-ui-themes';
import Aura from '@openng/optimus-ui-themes/aura';
import Lara from '@openng/optimus-ui-themes/lara';
import Material from '@openng/optimus-ui-themes/material';
import Nora from '@openng/optimus-ui-themes/nora';
import type { Preset } from '@openng/optimus-ui-themes/types';

const gold = {
  50: '#fffdf2',
  100: '#fff8dc',
  200: '#fff2b8',
  300: '#ffe58a',
  400: '#ffd25c',
  500: '#ffb12e',
  600: '#ff8a3a',
  700: '#d9531e',
  800: '#a83d16',
  900: '#7d2f14',
  950: '#4a1a0c',
};

const darkSurface = {
  0: '#0e1422',
  50: '#121a2b',
  100: '#182134',
  200: '#202b42',
  300: '#2a3550',
  400: '#3a4764',
  500: '#55627d',
  600: '#7c879e',
  700: '#a8b0c0',
  800: '#d5dae4',
  900: '#efe5d0',
  950: '#fff8e8',
};

const lightSurface = {
  0: '#fffdf6',
  50: '#fff8e8',
  100: '#fff2d4',
  200: '#ffe6ae',
  300: '#ffd25c',
  400: '#ffb12e',
  500: '#b26a1c',
  600: '#8a4f14',
  700: '#633a10',
  800: '#43270b',
  900: '#2a1907',
  950: '#151024',
};

function sunshine(base: Preset): Preset {
  return definePreset(base, {
    semantic: {
      primary: gold,
      focusRing: { color: '{primary.color}' },
      colorScheme: {
        light: {
          primary: { color: '#d9531e', contrastColor: '#fff8e8', hoverColor: '#ff8a3a', activeColor: '#a83d16' },
          surface: lightSurface,
        },
        dark: {
          primary: { color: '#ffb12e', contrastColor: '#151024', hoverColor: '#ffd25c', activeColor: '#ff8a3a' },
          surface: darkSurface,
        },
      },
    },
    components: {
      button: { roundedBorderRadius: '10px' },
      card: { borderRadius: '14px' },
    },
  } as never) as Preset;
}

export const SunshineNoon = sunshine(Lara);
export const SunshineEmber = sunshine(Aura);
export const SunshineDusk = sunshine(Material);
export const SunshineMidnight = sunshine(Nora);

/** Xterm palette matching the Sunshine terminal look. */
export const SunshineXtermJs = {
  light: {
    background: '#fffdf6',
    foreground: '#2a1907',
    cursor: '#d9531e',
    cursorAccent: '#fffdf6',
    black: '#2a1907',
    red: '#d9531e',
    green: '#4f7a2e',
    yellow: '#a83d16',
    blue: '#2a3550',
    magenta: '#7d2f14',
    cyan: '#3a4764',
    white: '#7c879e',
    brightBlack: '#55627d',
    brightRed: '#ff8a3a',
    brightGreen: '#78a84b',
    brightYellow: '#ffb12e',
    brightBlue: '#3a4764',
    brightMagenta: '#ffd25c',
    brightCyan: '#ff8a3a',
    brightWhite: '#fff8e8',
  },
  dark: {
    background: '#0e1422',
    foreground: '#efe5d0',
    cursor: '#ffb12e',
    cursorAccent: '#0e1422',
    black: '#0e1422',
    red: '#ff8a3a',
    green: '#a8c66c',
    yellow: '#ffd25c',
    blue: '#2a3550',
    magenta: '#d9531e',
    cyan: '#7fa8b8',
    white: '#a8b0c0',
    brightBlack: '#55627d',
    brightRed: '#ff9654',
    brightGreen: '#c9e39a',
    brightYellow: '#fff2b8',
    brightBlue: '#3a4764',
    brightMagenta: '#ffb12e',
    brightCyan: '#9ccfd8',
    brightWhite: '#fff8e8',
  },
};
