import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
const ProgressBarData = {
    reqCount: 0,
    resCount: 0
}
const subscribe: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

@Injectable({
    providedIn: 'root'
})
export class ProcessReqStore {
    addReqCount() {
        ProgressBarData.reqCount++
        subscribe.next(ProgressBarData.reqCount !== ProgressBarData.resCount);
    }

    addResCount() {
        ProgressBarData.resCount++
        subscribe.next(ProgressBarData.reqCount !== ProgressBarData.resCount);
    }

    getSubscribe() {
        return subscribe;
    }
}