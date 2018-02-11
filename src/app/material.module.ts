import { NgModule } from '@angular/core'
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatDialogModule, MatProgressBarModule, MatProgressSpinnerModule],
  exports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatDialogModule, MatProgressBarModule, MatProgressSpinnerModule],
})
export class MaterialModule { }