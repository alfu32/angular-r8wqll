import { Subject } from 'rxjs';

export class StateSubject<T> extends Subject<T> {
    private state;
    constructor(opts) {
        super();
        this.state = opts;
    }
    public getState() {
        return this.state;
    }
    public setState(s: object){
        const old = this.state;
        this.state = s;
        this.next(this.state);
    }
    public updateState(s: object) {
        this.setState({ ... this.state, ... s });
    }
}

export function State(config) {
    return function(target, accessor) {
        target[accessor] = new StateSubject(config);
    }
}