import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HOME_ROUTES } from './home.routing';
import { SharedModule } from '../../../Shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonsModule } from '../../../Commons/commons.module';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { TranslatePipe } from '@ngx-translate/core';
import { HomeFormsService } from './Services/home.forms.service';
import { HomeService } from './Services/home.service';
import { HomeComponent } from './Components/Home/home.component';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HOME_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    HomeService,
    HomeFormsService,
    StatusPipe,
    TranslatePipe
  ]
})
export class HomeModule { }
