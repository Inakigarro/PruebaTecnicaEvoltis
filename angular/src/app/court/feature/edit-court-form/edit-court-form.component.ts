import { Component } from '@angular/core';
import { EDIT_COURT_FORM_ID } from '../../domain/state/court.reducer';
import { CourtService } from '../../domain/service/court.service';
import { EditCourtActions } from '../../domain/state/court.actions';

@Component({
  selector: 'app-edit-court-form',
  templateUrl: './edit-court-form.component.html',
  styleUrl: './edit-court-form.component.scss'
})
export class EditCourtFormComponent {
  public formId = EDIT_COURT_FORM_ID;
  public title = 'Edit Court';
  public formState$ = this.courtService.editForm$;
  
  constructor(private courtService: CourtService) {}

  public onBackButtonClicked() {
    this.courtService.dispatch(EditCourtActions.backButtonClicked());
  }
  public onSubmitButtonClicked() {
    this.courtService.dispatch(EditCourtActions.saveButtonClicked({
      formId: this.formId
    }));
  }

  public onCancelButtonClicked() {
    this.courtService.dispatch(EditCourtActions.cancelButtonClicked());
    this.courtService.navigateToRoot();
  }

  public onResetButtonClicked() {
    this.courtService.dispatch(EditCourtActions.resetButtonClicked());
  }
}
