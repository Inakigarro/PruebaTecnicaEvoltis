import { Component } from '@angular/core';
import { FormGroupState, MarkAsSubmittedAction, ResetAction } from 'ngrx-forms'
import { Observable, map, take, tap } from 'rxjs';
import { CreateCourt } from '../../shared';
import { CreateCourtActions } from '../../domain/state/court.actions';
import { CourtService } from '../../domain/service/court.service';

export const CREATE_COURT_FORM_ID = 'create-court-form';

@Component({
  selector: 'app-create-court-form',
  templateUrl: './create-court-form.component.html',
  styleUrl: './create-court-form.component.scss'
})
export class CreateCourtFormComponent {
  public formId = CREATE_COURT_FORM_ID;
  public title = 'Create Court';
  public formState$ : Observable<FormGroupState<CreateCourt>> = this.courtService.createForm$;

  constructor(private courtService: CourtService) {}

  public onBackButtonClicked() {
    this.courtService.dispatch(CreateCourtActions.backButtonClicked());
  }
  public onSubmitButtonClicked() {
    this.courtService.dispatch(CreateCourtActions.saveButtonClicked({
      formId: this.formId
    }));
  }

  public onCancelButtonClicked() {
    this.courtService.dispatch(CreateCourtActions.cancelButtonClicked());
    this.courtService.navigateToRoot();
  }

  public onResetButtonClicked() {
    this.courtService.dispatch(CreateCourtActions.resetButtonClicked());
  }
}
