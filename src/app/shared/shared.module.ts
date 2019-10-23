import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  providers: [],
  declarations: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}

@NgModule({
  imports: [SharedModule, RouterTestingModule, HttpClientTestingModule],
  exports: [SharedModule, RouterTestingModule, HttpClientTestingModule],
  providers: [],
})
export class SharedSpecModule {}
