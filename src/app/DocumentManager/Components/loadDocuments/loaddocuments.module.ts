import { NgModule } from '@angular/core';
import { SharedModule } from '../../../Shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonsModule } from '../../../Commons/commons.module';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonService } from '../../../Commons/Services/common.service';
import { DateFormatPipe } from '../../../Shared/Pipes/dateFormatPipe';
import { LOADDOCUMENTS_ROUTES } from './loaddocuments.routing';
import { LoadDocumentComponent } from './Components/loaddocument.component';
// import { LoadDocumentComponent } from './Components/loaddocument.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    LOADDOCUMENTS_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    NgImageSliderModule,
    NgxExtendedPdfViewerModule,
    CommonsModule
  ],
  declarations: [
    LoadDocumentComponent
  ],
  exports: [
    LoadDocumentComponent
  ],
  providers: [
    StatusPipe,
    DateFormatPipe,
    TranslatePipe,
    CommonService,
   
  ]
})

export class LoadDocumentModule { }
