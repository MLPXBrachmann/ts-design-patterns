import Subject from './subject';

class ConcreteSubject<T> extends Subject {
  constructor(protected subjectState: T) {
    super();
  }

  public getState(): T {
    return this.subjectState;
  }

  public setState(newState: T) {
    this.subjectState = newState;
  }
}

export default ConcreteSubject;
