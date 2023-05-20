import { TestBed } from '@angular/core/testing';

import { TransactionsApiService } from './transactions-api.service';

describe('TransactionsApiService', () => {
    let service: TransactionsApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TransactionsApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

});
