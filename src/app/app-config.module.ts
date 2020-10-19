import { NgModule, InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
  apiEndpoint: string;
  isProd: boolean;
}

export const APP_DI_CONFIG: AppConfig = {
  apiEndpoint: environment.apiEndpoint,
  isProd: environment.production
};

@NgModule({
  providers: [{
    provide: APP_CONFIG,
    useValue: APP_DI_CONFIG
  }]
})
export class AppConfigModule { }
