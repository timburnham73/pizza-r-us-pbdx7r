import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderPlacedComponent } from './components/order-placed/order-placed.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'order-placed', component: OrderPlacedComponent },
  { path: 'order', component: OrderFormComponent },
  { path: '', redirectTo: '/order', pathMatch: 'full' },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, OrderFormComponent, OrderPlacedComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
