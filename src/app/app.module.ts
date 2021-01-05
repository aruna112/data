import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';
import { TestService } from './test.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

