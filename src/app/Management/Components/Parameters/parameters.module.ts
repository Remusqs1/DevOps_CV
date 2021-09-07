import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { ProfileService } from '../../../Administration/Components/Profile/Services/profile.service';
import { SharedModule } from '../../../Shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonsModule } from '../../../Commons/commons.module';
import { PARAMETERS_ROUTES } from './parameters.routing';
import { ParametersComponent } from './Components/parameters/parameters.component';
import { ParametersService } from './Services/parameters.service';



@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    PARAMETERS_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule
  ],
  declarations: [
    ParametersComponent
  ],
  exports: [
    ParametersComponent
  ],
  providers: [
    ProfileService,
    ParametersService,
    StatusPipe,
    TranslatePipe
  ]
})
export class ParametersModule { }