import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleModule } from './toggle/toggle.module';
import { NewToggleModule } from './newToggle/newToggle.module';
import { SharedModule } from './irrelevant-implementation-details/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToggleModule,
    SharedModule,
    NewToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
