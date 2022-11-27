import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from  '@angular/common/http'; // https://www.telerik.com/blogs/angular-basics-how-to-use-httpclient
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  // import the module
    FormsModule,        // for POST method
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
