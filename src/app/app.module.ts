import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NullCheckComponent } from './null-check/null-check.component';
import { DisplayValueRegressionComponent } from './display-value-regression/display-value-regression.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';

@NgModule({
  declarations: [
    AppComponent,
    NullCheckComponent,
    DisplayValueRegressionComponent,
    AccountsListComponent,
    AlertMessageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
