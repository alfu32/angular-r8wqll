import { Subject } from 'rxjs';

export class StateSubject<T extends object> extends Subject<T> {
    private state: T;
    constructor(opts: T) {
        super();
        this.state = opts;
    }
    public getState() {
        return this.state;
    }
    public setState(s: T){
        const old = this.state;
        this.state = s;
        this.next(this.state);
        return this;
    }
    public updateState(s: T) {
        Object.getOwnPropertyNames(s).forEach( k => this.state[k]=s[k] );
        return this;
    }
}

export function State(config: object) {
    return function(target: object, accessor: string) {
        target[accessor] = new StateSubject(config);
    }
}