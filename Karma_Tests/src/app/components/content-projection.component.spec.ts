import { DebugElement } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

// the content projected Component
@Component({
    selector: 'my-collapsible',
    template: `
        <h1>
            <ng-content select="[title]"></ng-content>
        </h1>
        <div class="content">
            <ng-content select="[body]"></ng-content>
        </div>
    `
})
class CollapsiblePanel {}

@Component({
  selector: 'test',
  template: `
    <my-collapsible>
        <span title>I'm the title</span>
        <div body>I'm the body</div>
    </my-collapsible>
  `
})
class ContentProjectionComponent {}

describe('ContentProjectionComponent ', ()=>{

    let component: ContentProjectionComponent;
    let fixture: ComponentFixture<ContentProjectionComponent>;
    beforeEach(
        async(() =>{
            TestBed.configureTestingModule({
                declarations: [CollapsiblePanel,ContentProjectionComponent]
            }).compileComponents();
        })
    )

    beforeEach(()=>{
        fixture = TestBed.createComponent(ContentProjectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it('should project `title` correctly',()=>{
        expect(fixture.debugElement.query(By.css('my-collapsible')).query(By.css('h1')).nativeElement.innerHTML).toContain("I'm the title");
    })

    it('should project `body` correctly',()=>{
        expect(fixture.debugElement.query(By.css('my-collapsible')).query(By.css('div')).nativeElement.innerHTML).toContain("I'm the body")
    })
    

})