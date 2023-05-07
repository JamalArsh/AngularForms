import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
// import AOS from 'aos';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  expValue!: number;
  reactiveForm!: FormGroup;

  ngOnInit(): void {
    // AOS.init();
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(
        null,
        Validators.compose([Validators.email, Validators.required])
      ),
      password: new FormControl(
        null,
        Validators.compose([Validators.minLength(6), Validators.required])
      ),
      age: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.min(16),
          Validators.max(55),
        ])
      ),
      experience: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      job: new FormControl('', Validators.required),
      lang: new FormControl(null),
      cv: new FormControl(null),
      experienceDetails: new FormArray([
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
      ]),
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }

  addExperienceDetails() {
    (<FormArray>this.reactiveForm.get('experienceDetails')).push(
      new FormControl(null)
    );
    console.log(this.reactiveForm.get('experienceDetails'));
  }
}
