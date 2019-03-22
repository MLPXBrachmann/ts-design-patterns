import ConcreteSubject from './concrete-subject';
import IObserver from './observer';

class ConcreteObserver<T> implements IObserver {
  protected observerState: T;

  constructor(protected subject: ConcreteSubject<T>) {
    this.observerState = subject.getState();
    subject.attach(this);
  }

  public getState() {
    return this.observerState;
  }

  public update() {
    this.observerState = this.subject.getState();
  }
}

export default ConcreteObserver;
