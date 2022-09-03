import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { ClientsComponent } from './clients.component';
import { ClientUpdateComponent } from './client-update/client-update.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbIconModule, NbUserModule } from '@nebular/theme';
import { ClientMainComponent } from './client-main/client-main.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    ClientsComponent,
    ClientUpdateComponent,
    ClientMainComponent,
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ThemeModule,
    NbButtonModule,
    NbCardModule,
    NbActionsModule,
    NbUserModule,
    NbIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule
  ],

})
export class ClientsModule { }
