import { TestBed } from '@angular/core/testing';

import { SetGoalService } from './set-goal.service';

describe('SetGoalService', () => {
    let service: SetGoalService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SetGoalService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

});
