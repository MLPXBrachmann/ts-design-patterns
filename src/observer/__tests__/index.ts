import ConcreteObserver from '../concrete-observer';
import ConcreteSubject from '../concrete-subject';

describe('observer integration', () => {
  it('should work', () => {
    const subject = new ConcreteSubject(0);
    const observer = new ConcreteObserver(subject);

    subject.setState(3);
    expect(observer.getState()).toBe(0);

    subject.setState(2);
    subject.notify();
    expect(observer.getState()).toBe(2);

    subject.detach(observer);
    subject.setState(1);
    subject.notify();
    expect(observer.getState()).toBe(2);

    subject.attach(observer);
    subject.notify();
    expect(observer.getState()).toBe(1);
  });
});
