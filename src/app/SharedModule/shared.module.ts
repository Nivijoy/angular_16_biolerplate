// import {A11yModule} from '@angular/cdk/a11y';
// import {CdkAccordionModule} from '@angular/cdk/accordion';
// import {ClipboardModule} from '@angular/cdk/clipboard';
// import {DragDropModule} from '@angular/cdk/drag-drop';
// import {PortalModule} from '@angular/cdk/portal';
// import {ScrollingModule} from '@angular/cdk/scrolling';
// import {CdkStepperModule} from '@angular/cdk/stepper';
// import {CdkTableModule} from '@angular/cdk/table';
// import {CdkTreeModule} from '@angular/cdk/tree';
// import {MatBadgeModule} from '@angular/material/badge';
// import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
// import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatListModule} from '@angular/material/list';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
// import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatSliderModule} from '@angular/material/slider';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
// import {MatSortModule} from '@angular/material/sort';
// import {MatToolbarModule} from '@angular/material/toolbar';
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';
// import {MatTreeModule} from '@angular/material/tree';
// import {OverlayModule} from '@angular/cdk/overlay';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatLegacyOptionModule as MatOptionModule } from '@angular/material/legacy-core';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DragDropFileDirective, RandomColorDirective, TypingEndsDirective } from './directive';
import { FileDropComponent } from './components/file-drop/file-drop.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatOptionSearchComponent } from './components/mat-option-search/mat-option-search.component';
import { ReadExcelComponent } from './components/read-excel/read-excel.component';import {
    GetValueFromListPipe,
    IconListPipe,
    TaxCalculatorPipe,
    FindDiffPercentagePipe,
    GetShareValuePipe
} from './pipe';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import {MatLegacyPaginatorModule as MatPaginatorModule} from '@angular/material/legacy-paginator';
import { GetTaxBasedPricePipe } from './pipe/get-tax-based-price/get-tax-based-price.pipe';
import { ConvertNumToWordsPipe } from './pipe/convert-num-to-words/convert-num-to-words.pipe';
import { IsVisibleModule } from '../is-visible/is-visible.module';
import { StyleCursorDirective } from './directive/style-cursor/style-cursor.directive';
@NgModule({
    declarations: [
        DragDropFileDirective,
        FileDropComponent,
        MatOptionSearchComponent,
        TypingEndsDirective,
        ReadExcelComponent,
        GetValueFromListPipe,
        IconListPipe,
        TaxCalculatorPipe,
        FindDiffPercentagePipe,
        GetShareValuePipe,
        ConfirmationDialogComponent,
        RandomColorDirective,
        GetTaxBasedPricePipe,
        ConvertNumToWordsPipe,
        StyleCursorDirective
     ],
    exports: [
        GetShareValuePipe,
        FindDiffPercentagePipe,
        TaxCalculatorPipe,
        GetValueFromListPipe,
        ReadExcelComponent,
        TypingEndsDirective,
        MatOptionSearchComponent,
        FileDropComponent,
        DragDropFileDirective,
        MatAutocompleteModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatNativeDateModule,
        MatRadioModule,
        MatSelectModule,
        MatTableModule,
        ReactiveFormsModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatGridListModule,
        MatMenuModule,
        MatSlideToggleModule,
        IconListPipe,
        MatPaginatorModule,
        RandomColorDirective,
        ConvertNumToWordsPipe,
        IsVisibleModule,
        MatTooltipModule,
        MatStepperModule,
        MatDividerModule
     ],
    imports: [
        IsVisibleModule,
        MatIconModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatChipsModule,
        CommonModule,
        FormsModule,
        MatOptionModule,
        MatInputModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        FormsModule,
        MatSelectModule,
        MatDialogModule,
        MatTableModule,
        // ConvertNumToWordsPipe
    ]
})
export class SharedModule {}
