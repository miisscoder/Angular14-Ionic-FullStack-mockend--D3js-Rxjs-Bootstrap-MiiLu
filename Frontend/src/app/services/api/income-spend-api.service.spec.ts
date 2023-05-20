import { TestBed } from '@angular/core/testing'; 
import { IncomeSpendApiService } from './income-spend-api.service';

describe('IncomeSpendApiService', () => {
    let service: IncomeSpendApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(IncomeSpendApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

});
