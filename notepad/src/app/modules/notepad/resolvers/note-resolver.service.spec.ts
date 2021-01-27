import { TestBed } from '@angular/core/testing';

import { NoteResolverService } from './note-resolver.service';

describe('NoteResolverService', () => {
  let service: NoteResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
