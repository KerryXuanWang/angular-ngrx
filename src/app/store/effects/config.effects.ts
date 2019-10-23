import { Injectable } from '@angular/core';

import { Effect, ofType, Actions } from '@ngrx/effects';

import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ConfigService } from '@shared/services/config.service';
import { ConfigActionTypes, GetConfigSuccess, GetConfig } from '@store/actions/config.actions';

@Injectable()
export class ConfigEffects {
  @Effect()
  getConfig$ = this.actions$.pipe(
    ofType<GetConfig>(ConfigActionTypes.GET_CONFIG),
    switchMap(() => this.configService.getConfig()),
    switchMap((config) => of(new GetConfigSuccess(config))),
  );

  constructor(private configService: ConfigService, private actions$: Actions) {}
}
