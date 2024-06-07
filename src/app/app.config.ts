import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { NgxSpinnerModule, provideSpinnerConfig } from 'ngx-spinner';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
     provideClientHydration(),
      provideAnimationsAsync(),
      importProvidersFrom(NgxSpinnerModule.forRoot(/**5 */)),
      provideAnimations(), // required animations providers
      provideToastr(), // Toastr providers
      provideHttpClient(),
      {provide:"baseUrl",useValue:"https://localhost:7248/api", multi:true}
    ]
};
