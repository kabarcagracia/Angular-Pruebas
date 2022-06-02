//archivo que arranca la app

// modulos para habilitar en modo productivo
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import modulo principal
import { AppModule } from './app/app.module';
// import variable de entorno
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
