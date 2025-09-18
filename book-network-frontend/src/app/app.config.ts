import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import { routes } from './app.routes';

import { ApiConfiguration } from './services/api-configuration';
// import { BookService, UserService } from './services/services'; // ← Services générés


// Configuration de l'API
const apiConfig: ApiConfiguration = {
  rootUrl: 'http://localhost:8088/api/v1'
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    // Configuration de l'API
    { provide: ApiConfiguration, useValue: apiConfig }
  ]
};
