import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { SidebarModule } from 'ng-sidebar';
import {MatTableModule} from '@angular/material/table'

let material = [
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatDividerModule,
  SidebarModule,
  MatTableModule
  ]
@NgModule({
  imports: [
    material
  ],
  exports:[
    material
  ]
})
export class MaterialModule { }
