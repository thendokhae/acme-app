import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccountService } from '../app/account.service';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsViewComponent } from './accounts-view/accounts-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
