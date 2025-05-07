import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneByIDComponent } from './get-one-by-id.component';

describe('GetOneByIDComponent', () => {
  let component: GetOneByIDComponent;
  let fixture: ComponentFixture<GetOneByIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetOneByIDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOneByIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
