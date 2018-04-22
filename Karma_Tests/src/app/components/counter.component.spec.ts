import { Component, OnInit, OnDestroy } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, TestBed, ComponentFixture, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';

@Component({
    selector: 'app-counter',
    template: ``
})
export class CounterComponent implements OnInit, OnDestroy {
    currentCounter = 0;
    maxCounter = 10;
    private counterInterval;

    constructor() { }

    ngOnInit() {
        this.startCounter();
    }

    private startCounter() {
        this.counterInterval = setInterval(() => {
            if (this.currentCounter >= this.maxCounter) {
                this.currentCounter = 0;
            } else {
                this.currentCounter++;
            }
        }, 1000);
    }

    ngOnDestroy() {
        if (this.counterInterval) {
            clearTimeout(this.counterInterval);
        }
    }
}

describe('CounterComponent', () => {

    let component: CounterComponent;
    let fixture: ComponentFixture<CounterComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [CounterComponent]
            }).compileComponents();
        })
    );

    beforeEach(()=>{
        fixture = TestBed.createComponent(CounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(()=>{
        // cancel the timer on each destroy
        fixture.destroy();
    })

    it('should count with timer',
        fakeAsync(() =>{
            component.ngOnInit();
            expect(component.currentCounter).toBe(0);

            tick(500);
            expect(component.currentCounter).toBe(0);

            tick(1000);
            expect(component.currentCounter).toBe(1); 

            tick(2000);
            expect(component.currentCounter).toBe(3); 

            discardPeriodicTasks();
        })
    )
})