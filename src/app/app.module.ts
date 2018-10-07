import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { LogoComponent } from './logo/logo.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageBodyComponent } from './page-body/page-body.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { LinksSetOneComponent } from './links-set-one/links-set-one.component';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent},
  { path: 'services', component: ServicesPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'contactus', redirectTo: 'contact' },

 
];

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    LogoComponent,
    PageFooterComponent,
    PageBodyComponent,
    HomePageComponent,
    ContactPageComponent,
    ServicesPageComponent,
    LinksSetOneComponent
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
