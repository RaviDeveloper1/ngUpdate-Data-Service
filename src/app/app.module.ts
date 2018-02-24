import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';

import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
