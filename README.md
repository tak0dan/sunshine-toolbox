# Sunshine Toolbox

Graphical maintenance and repair toolkit for **Sunshine OS**.

Sunshine Toolbox is a Sunshine-branded fork of the Garuda Toolbox application. It keeps the
full feature set of the original Electron/Angular toolbox, but uses Sunshine OS branding,
icons and themes, and delegates every system action to the native `sunshine-*` commands
shipped by `sunshine-tools`.

## Features

- System update manager (`sunshine-update`)
- Diagnostics and health checks (`sunshine-doctor`)
- Boot repair and GRUB boot options
- Systemd service manager
- Network assistant (DNS, network manager)
- User manager
- Maintenance tools (journal, caches, pacman, mirrors)
- Gaming setup helpers (`sunshine-gaming`)
- Configuration file editor
- Setup wizard and welcome pages
- Integrated terminal with the Sunshine palette

## Requirements

- `electron` (the bundled build targets Electron 43)
- `sunshine-base` / `sunshine-tools` (provides `sunshine-update`, `sunshine-doctor`,
  `sunshine-info`, `sunshine-rescue`, `sunshine-gaming`, …)
- `sunshine-libs` (terminal/help integration)
- `pacman-contrib` (`checkupdates`)
- Optional: `paru` for AUR support

## Building from source

```sh
pnpm install --frozen-lockfile
pnpm run build          # Angular + Electron main/preload bundles
pnpm run electron-builder  # AppImage / snap / unpacked dir in dist/
```

To produce just the unpacked directory used by the Arch package:

```sh
pnpm exec electron-builder build --config electron-builder.mjs --publish never --linux dir
```

An Arch `PKGBUILD` is provided in [`packaging/PKGBUILD`](packaging/PKGBUILD):

```sh
cd packaging
makepkg -si
```

## Runtime layout

| Path | Purpose |
| --- | --- |
| `/usr/lib/sunshine-toolbox` | Bundled Electron application |
| `/usr/bin/sunshine-toolbox` | Launcher |
| `/usr/share/applications/sunshine-toolbox.desktop` | Desktop entry |
| `/usr/share/polkit-1/actions/org.sunshineos.toolbox.policy` | Polkit actions |
| `/usr/libexec/sunshine-toolbox-pty-wrapper` | Privileged command helper |
| `/var/lib/sunshine`, `/var/log/sunshine` | State and logs (owned by `sunshine-*`) |

## Attribution and license

This program is a modified fork of **Garuda Toolbox**
(<https://gitlab.com/garuda-linux/applications/toolbox>), originally developed by the
Garuda Linux contributors and licensed **GPL-3.0-or-later**. The original license is
retained in [`LICENSE`](LICENSE); see [`NOTICE`](NOTICE) for details.

Sunshine-specific modifications Copyright © 2026 tak0dan.

Licensed under the **GNU General Public License v3.0 or later**.
