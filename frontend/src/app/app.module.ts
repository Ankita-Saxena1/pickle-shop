import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { PickleListComponent } from './components/pickle-list/pickle-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PickleListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }