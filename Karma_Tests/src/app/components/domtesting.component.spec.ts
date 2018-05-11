import { tick } from '@angular/core/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'test',
    template: `
    <div class="container" *ngIf="isVisible">Hi there!</div>
    <button (click)="isVisible = !isVisible">toggle</button>
    <div id="overlay" style="display: none"></div>
  `
})
class DomTestingComponent {
    isVisible: boolean = false;
}


describe('DomTestingComponent', () => {

    let component: DomTestingComponent;
    let fixture: ComponentFixture<DomTestingComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [DomTestingComponent]
            }).compileComponents();
        })
    )

    beforeEach(() => {
        fixture = TestBed.createComponent(DomTestingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    })

    it('should remove DOM when false', () => {
        let containerElement = fixture.debugElement.query(By.css('.container'));
        expect(containerElement).toBeNull();
    })

    it('should not display id "overlay"', () => {
        let containerElement = fixture.debugElement.query(By.css('#overlay')).nativeElement.style.display;
        expect(containerElement).toBe('none');
    })

    it('should render DOM when true', () => {
        component.isVisible = true;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            let containerEle = fixture.debugElement.query(By.css('.container'));
            expect(containerEle).not.toBeNull();
        })
    })

    it('should toggle visiblity',()=>{
        let button = fixture.debugElement.query(By.css('button'));
        expect(fixture.debugElement.query(By.css('.container'))).toBeNull();

        button.triggerEventHandler('click',<Event>{});
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.container'))).not.toBeNull();

        button.triggerEventHandler('click',<Event>{});
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.container'))).toBeNull();

    })

})