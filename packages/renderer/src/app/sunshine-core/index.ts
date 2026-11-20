/**
 * Sunshine OS UI primitives for Sunshine Toolbox.
 *
 * Small local replacements for the branded component library the upstream
 * project used. Everything here is styled with the Sunshine OS palette
 * (gold on deep indigo) and uses `sunshine-*` selectors and classes.
 */
import {
  Component,
  Directive,
  InjectionToken,
  Injectable,
  inject,
  input,
  makeEnvironmentProviders,
} from '@angular/core';
import { type MenuItem, MessageService } from '@openng/optimus-ui/api';
import { provideOptimus, type OptimusConfigType } from '@openng/optimus-ui/config';
import { Menubar } from '@openng/optimus-ui/menubar';

/** Configuration token for Sunshine NG components. */
export const SUNSHINE_NG_CONFIG = new InjectionToken<{ font?: string }>('SUNSHINE_NG_CONFIG');

/** Registers Optimus UI with Sunshine defaults. */
export function provideSunshineNG(config: { font?: string } = {}, ...features: OptimusConfigType[]) {
  return makeEnvironmentProviders([
    provideOptimus(...features),
    { provide: SUNSHINE_NG_CONFIG, useValue: { font: 'InterVariable', ...config } },
    MessageService,
  ]);
}

export type MessageToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'center';

type ToastExtras = Record<string, unknown>;

/** Reassuring Sunshine-style notifications, backed by the Optimus toast service. */
@Injectable({ providedIn: 'root' })
export class MessageToastService {
  private readonly messages = inject(MessageService);

  info(title: string, details: string, position: MessageToastPosition = 'top-right', extras: ToastExtras = {}): void {
    this.show('info', title, details, position, extras);
  }

  success(title: string, details: string, position: MessageToastPosition = 'top-right', extras: ToastExtras = {}): void {
    this.show('success', title, details, position, extras);
  }

  warn(title: string, details: string, position: MessageToastPosition = 'top-right', extras: ToastExtras = {}): void {
    this.show('warn', title, details, position, extras);
  }

  error(title: string, details: string, position: MessageToastPosition = 'top-right', extras: ToastExtras = {}): void {
    this.show('error', title, details, position, extras);
  }

  contrast(title: string, details: string, position: MessageToastPosition = 'top-right', extras: ToastExtras = {}): void {
    this.show('contrast', title, details, position, extras);
  }

  secondary(title: string, details: string, position: MessageToastPosition = 'top-right', extras: ToastExtras = {}): void {
    this.show('secondary', title, details, position, extras);
  }

  private show(severity: string, title: string, details: string, position: string, extras: ToastExtras): void {
    this.messages.add({ severity, summary: title, detail: details, key: position, ...extras } as never);
  }
}

/** Marks content that belongs in the right-hand side of the Sunshine shell bar. */
@Directive({ selector: '[sunshineShellBarEnd]', standalone: true })
export class ShellBarEndDirective {}

/** The Sunshine OS application shell: menu bar plus projected page content. */
@Component({
  selector: 'sunshine-shell',
  standalone: true,
  imports: [Menubar],
  template: `
    <div class="sunshine-shell">
      <p-menubar class="sunshine-shell__menubar" [model]="menuItems()"></p-menubar>
      <div class="sunshine-shell__content"><ng-content /></div>
    </div>
  `,
  styles: [
    `
      :host { display: block; }
      .sunshine-shell { min-height: 100%; }
      .sunshine-shell__menubar {
        border-radius: 12px;
        border: 1px solid #2a3550;
        background: #1a202d;
      }
      .sunshine-shell__content { padding: 0 0.25rem; }
    `,
  ],
})
export class ShellComponent {
  readonly menuItems = input<MenuItem[]>([]);
  readonly relativePosition = input<boolean>(false);
  readonly alwaysShowDropdownMenu = input<boolean>(false);
  readonly contentPadding = input<number>(16);
}
