import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rForm: FormGroup;
  post: any;
  description: string = '';
  name: string = '';
  titleAlert: string = 'This field is required';
  genderList: any[] = [
    { id: 1, type: 'Male' },
    { id: 2, type: 'Female' },
    { id: 3, type: 'Others' },
  ];
  activityList: any[] = [
    { id: 1, type: 'fly' },
    { id: 2, type: 'eat' },
    { id: 3, type: 'sleep' },
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.rForm = this.fb.group({
      'name': [null, Validators.required],
      'description': [null, [Validators.required, Validators.minLength(3), Validators.maxLength(500)]],
      'gender': [null, Validators.required],
      'breed': [null, Validators.required],
      // 'activities': this.fb.array([this.activityList[0]]),  to pre-select a value
      'activities': this.fb.array([]),
      'validateName': [false],
      'url': ['', [Validators.required, this.customValidatorForUrl]]
    });

    this.rForm.get('validateName').valueChanges.subscribe(
      (validate) => {
        if (validate) {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();
      });
  }

  isActivityChecked(data) {
    return this.rForm.controls['activities'].value.includes(data);
  }
  onActivityChange(activity: any, isChecked: boolean) {
    const emailFormArray = <FormArray>this.rForm.controls.activities;

    if (isChecked) {
      emailFormArray.push(new FormControl(activity));
    } else {
      const index = emailFormArray.controls.findIndex(x => x.value.type === activity.type);
      emailFormArray.removeAt(index);
    }
  }

  addPost(post) {
    console.log(post);
  }

  customValidatorForUrl (control: AbstractControl) {
    return (!control.value.startsWith('https') && (control.value !== '')) ? {inValidUrl: true} : null;
  }

}
