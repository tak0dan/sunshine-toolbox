import type { AppComponent } from './app.component';

export async function globalKeyHandler(this: AppComponent, event: KeyboardEvent): Promise<void> {
  if (!event.ctrlKey) {
    switch (event.key) {
      case 'F1':
        void this.shellService.open('https://github.com/tak0dan/SunshineOS/discussions');
        break;
      case 'F2':
        void this.shellService.open('https://start.tak0dan.github.io/sunshineos-site');
        break;
      case 'F3':
        void this.shellService.open('https://github.com/tak0dan/SunshineOS/wiki');
        break;
      case 'F4':
        this.consoleComponent().visible.set(!this.consoleComponent().visible());
        break;
      case 'F11':
        break;
    }
  } else if (event.ctrlKey) {
    switch (event.key) {
      case 'q':
        await this.requestShutdown();
        break;
    }
  }
}
