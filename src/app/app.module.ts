import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdTableModule } from '@angular/material';
import { CdkTableBasicExample } from './cdk-table-basic-example';
import { HttpModule } from '@angular/http';
import { CdkTableModule } from '@angular/cdk';

import { AppComponent } from './app.component';

@NgModule({
  exports: [
    CdkTableModule,
    MdTableModule,
  ]
})
export class CdkMaterialModule { }

@NgModule({
  declarations: [
    AppComponent,
    CdkTableBasicExample
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    CdkMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
