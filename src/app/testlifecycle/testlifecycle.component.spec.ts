import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestlifecycleComponent } from './testlifecycle.component';

describe('TestlifecycleComponent', () => {
  let component: TestlifecycleComponent;
  let fixture: ComponentFixture<TestlifecycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestlifecycleComponent]
    });
    fixture = TestBed.createComponent(TestlifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
