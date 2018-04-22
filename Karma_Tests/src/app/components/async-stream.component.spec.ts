import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
    selector: 'test',
    template: `
    <div>{{ personName | async }}</div>
  `
})
class AsyncComponent {
    personName: Observable<string>;
}

describe('Async Component', function () {

    let component: AsyncComponent;
    let fixture: ComponentFixture<AsyncComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [AsyncComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(AsyncComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be defined', () => {
        expect(component).toBeTruthy();
    })

    it('should correctly render the stream of Observable', () => {
        let stream = new Subject<string>();
        component.personName = stream.asObservable();
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('div')).nativeElement.innerHTML).toBe('');
        
        stream.next('Hi');

        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('div')).nativeElement.innerHTML).toBe('Hi');
    })

});