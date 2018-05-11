/* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync, inject, tick, discardPeriodicTasks } from '@angular/core/testing';
import { Injectable } from '@angular/core';

@Injectable()
class AsyncService {
    simpleAsync() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Hi there');
            }, 100);
        });
    }
}

describe('AsyncService', () => {
    let service: AsyncService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AsyncService]
        });
        service = TestBed.get(AsyncService);
    })

    it('should be defined', () => {
        expect(service).toBeDefined();
    })

    it('should handle a simple async scenario', async(() => {
        service.simpleAsync().then((result) => {
            expect(result).toBe('Hi there');
        })
    }))

    it('should handle a simple fakeAsync scenario', fakeAsync(()=>{
        let val;
        service.simpleAsync().then((result) => {
            val = result;
        });

        expect(val).toBeUndefined();
        tick(100);
        expect(val).toBeDefined();
        expect(val).toBe('Hi there');

    }))
})