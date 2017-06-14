import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

console.log('??', (new Date()).getTime())
platformBrowserDynamic().bootstrapModule(AppModule);
console.log('!', (new Date()).getTime())
