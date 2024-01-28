import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplecomponenttestComponent } from './samplecomponenttest.component';

describe('SamplecomponenttestComponent', () => {
  let component: SamplecomponenttestComponent;
  let fixture: ComponentFixture<SamplecomponenttestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamplecomponenttestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SamplecomponenttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
