import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoorComponent } from './door/door.component';
import { DoorListComponent } from './door-list/door-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DoorComponent,
    DoorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
