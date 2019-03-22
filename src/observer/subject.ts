import IObserver from './observer';

class Subject {
  private observers: IObserver[] = [];

  public attach(observer: IObserver) {
    this.observers.push(observer);
  }

  public detach(observer: IObserver) {
    this.observers = this.observers.filter(
      (currentObserver) => currentObserver !== observer,
    );
  }

  public notify() {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
}

export default Subject;
