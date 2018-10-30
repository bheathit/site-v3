import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageMenuComponent } from './home-page/home-page-menu/home-page-menu.component';
import { HomePageHeaderComponent } from './home-page/home-page-header/home-page-header.component';
import { ContactPageMenuComponent } from './contact-page/contact-page-menu/contact-page-menu.component';
import { ContactPageHeaderComponent } from './contact-page/contact-page-header/contact-page-header.component';
import { AboutPageHeaderComponent } from './about-page/about-page-header/about-page-header.component';
import { AboutPageMenuComponent } from './about-page/about-page-menu/about-page-menu.component';
import { AboutPageComponent } from './about-page/about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page/contact-page.component';


const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent},
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'contactus', redirectTo: 'contact' },

 
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageMenuComponent,
    HomePageHeaderComponent,
    ContactPageMenuComponent,
    ContactPageHeaderComponent,
    AboutPageHeaderComponent,
    AboutPageMenuComponent,
    AboutPageComponent,
    HomePageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
