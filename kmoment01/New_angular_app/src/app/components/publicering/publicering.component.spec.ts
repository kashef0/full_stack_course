import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubliceringComponent } from './publicering.component';

describe('PubliceringComponent', () => {
  let component: PubliceringComponent;
  let fixture: ComponentFixture<PubliceringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PubliceringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubliceringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
