/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'test',
  template: `
    <div [ngClass]="{ 'alert': isAlert, 'success': !isAlert }"></div>
  `
})
class DynamicCssClassesComponent {
    @Input() isAlert: boolean = false;
}

describe('DynamicCssClassesComponent',()=>{

    let component: DynamicCssClassesComponent;
    let fixture: ComponentFixture<DynamicCssClassesComponent>;

    beforeEach(
        async(() =>{
            TestBed.configureTestingModule({
                declarations: [DynamicCssClassesComponent]
            }).compileComponents();
        })
    )

    beforeEach(()=>{
        fixture = TestBed.createComponent(DynamicCssClassesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it('should be created',()=>{
        expect(component).toBeTruthy();
    })

    it('should have `alert` if  `isAlert` is true',()=>{
        component.isAlert = true;
        fixture.detectChanges();

        let classes:any = fixture.debugElement.query(By.css('div')).classes;
        expect(classes.alert).toBeTruthy();
        expect(classes.success).toBeFalsy();
    })

    it('should have `alert` if  `isAlert` is false',()=>{
        component.isAlert = false;
        fixture.detectChanges();

        let classes:any = fixture.debugElement.query(By.css('div')).classes;
        expect(classes.alert).toBeFalsy();
        expect(classes.success).toBeTruthy();
    })



})