import { TestBed } from '@angular/core/testing';

import { GoalApiService } from './goal-api.service';

describe('GoalApiService', () => {
    let service: GoalApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GoalApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

});
