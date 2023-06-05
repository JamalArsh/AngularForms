import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent {
  expValue: number = 5;

  @ViewChild('myForm') form!: NgForm;
  defaultGender = 'male';
  gender = [
    { id: '1', value: 'male' },
    { id: '2', value: 'female' },
  ];

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.form);
  }
}
