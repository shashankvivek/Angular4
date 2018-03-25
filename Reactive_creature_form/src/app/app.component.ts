import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

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
    { id: 1, type: 'fly'},
    { id: 2, type: 'eat'},
    { id: 3, type: 'sleep'},
  ]

  constructor(private fb: FormBuilder) { }

  buildActivities() {
    const arr = this.activityList.map(activity => {
      return this.fb.control(activity.selected)
    });

    return this.fb.array(arr);
  }

  ngOnInit() {
    this.rForm = this.fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(500)])],
      'gender': [null, Validators.required],
      'breed': [null, Validators.required],
      // 'activities': this.fb.array([this.activityList[0]]),
      'activities': this.fb.array([]),
      'validate': ''
    });

    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    );
  }

  isChecked(data){
    return this.rForm.controls['activities'].value.includes(data);
  }
  onChange(activity: any, isChecked: boolean) {
    const emailFormArray = <FormArray>this.rForm.controls.activities;

    if (isChecked) {
      emailFormArray.push(new FormControl(activity));
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value.type == activity.type);
      emailFormArray.removeAt(index);
    }
  }

  addPost(post) {
    console.log(post);
  }

}
