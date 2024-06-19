import { BehaviorSubject } from "rxjs";

export class Store<T> {
    constructor(
        public storeData: Array<T>,
        public subscribtion: BehaviorSubject<Array<T>>
    ) {}

    add(...storeDataToAdd: Array<T>) {
        this.storeData.push(...storeDataToAdd)
        this.subscribtion.next(this.storeData);
    }

    removeByIndex(index: number) {
        this.storeData.splice(index, 1);
        this.subscribtion.next(this.storeData);
    }

    update(storeDataToupdate: T, index: number) {
        this.storeData[index] = { ...this.storeData[index], ...storeDataToupdate};
        this.subscribtion.next(this.storeData);
    }

    getData(): Array<T> {
        return this.storeData;
    }

    setData(storeData: Array<T>) {
        this.storeData = storeData;
        this.subscribtion.next(this.storeData);
    }

    getSubscribtion() {
        return this.subscribtion;
    }
}