import { TestBed } from '@angular/core/testing';

import { SetGoalApiService } from './set-goal-api.service';

describe('SetGoalApiService', () => {
    let service: SetGoalApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SetGoalApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

});
