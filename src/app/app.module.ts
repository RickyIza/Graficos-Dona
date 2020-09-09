import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioService } from './Services/usuario.service';
import { UsuarioMainComponent } from './Components/Usuario/usuario-main/usuario-main.component';
import { UsuarioListComponent } from './Components/Usuario/usuario-main/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './Components/Usuario/usuario-main/usuario-form/usuario-form.component';
import { UsuarioCardComponent } from './Components/Usuario/usuario-main/usuario-card/usuario-card.component';
import { ProductoMainComponent } from './Components/Producto/producto-main/producto-main.component';
import { ProductoListComponent } from './Components/Producto/producto-main/producto-list/producto-list.component';
import { ProductoFormComponent } from './Components/Producto/producto-main/producto-form/producto-form.component';
import { ProductoCardComponent } from './Components/Producto/producto-main/producto-card/producto-card.component';
import { NavbardComponent } from './shared/navbard/navbard.component';
import { RolPipe } from './shared/rol.pipe';
import { EstadoPipe } from './shared/estado.pipe';
import { UsuarioCarritoComponent } from './Components/usuario-carrrito-main/usuario-carrito/usuario-carrito.component';
import { UsuarioCarrritoMainComponent } from './Components/usuario-carrrito-main/usuario-carrrito-main.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CabeceraPedidoFormComponent } from './Components/Pedido/cabecera-pedido-form/cabecera-pedido-form.component';
import { DetallePedidoMainComponent } from './Components/DetallePedido/detalle-pedido-main/detalle-pedido-main.component';
import { DetallePedidoListComponent } from './Components/DetallePedido/detalle-pedido-main/detalle-pedido-list/detalle-pedido-list.component';
import { DetallePedidoFormComponent } from './Components/DetallePedido/detalle-pedido-main/detalle-pedido-form/detalle-pedido-form.component';
import { DetallePedidoCardComponent } from './Components/DetallePedido/detalle-pedido-main/detalle-pedido-card/detalle-pedido-card.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent, 
    UsuarioListComponent,
    UsuarioMainComponent,
    UsuarioFormComponent,
    UsuarioCardComponent,
    ProductoMainComponent,
    ProductoListComponent,
    ProductoFormComponent,
    ProductoCardComponent,
    NavbardComponent,
    RolPipe,
    EstadoPipe,
    UsuarioCarritoComponent,
    UsuarioCarrritoMainComponent,
    CabeceraPedidoFormComponent,
    DetallePedidoMainComponent,
    DetallePedidoListComponent,
    DetallePedidoFormComponent,
    DetallePedidoCardComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [
    UsuarioService,
    {
      provide: LOCALE_ID,
      useValue: 'es-EC'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
