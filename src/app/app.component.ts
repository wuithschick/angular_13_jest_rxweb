import {Component, OnInit} from '@angular/core';
import {RxFormBuilder, RxFormGroup} from '@rxweb/reactive-form-validators';
import {TestFormModel} from './test-formModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'angular_13_jest';
  form: RxFormGroup | undefined;

  constructor(private fb: RxFormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.formGroup(TestFormModel) as RxFormGroup;
  }

}
