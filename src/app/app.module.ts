import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SharedModule } from '@shared/shared.module';

import { appReducers } from '@store/reducers/app.reducers';
import { UserEffects } from '@store/effects/user.effects';
import { ConfigEffects } from '@store/effects/config.effects';

import { environment } from '@env/environment';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ...routedComponents],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,

    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument({
      name: 'NGRX DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }),

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
