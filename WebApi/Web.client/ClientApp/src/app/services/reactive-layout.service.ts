import { BreakpointObserver, Breakpoints, BreakpointState } from "@angular/cdk/layout";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ResponsiveLayoutService {

    private _currentMediaState!: BreakpointState;

    public breakpoint$: Observable<BreakpointState>;
     
    constructor(private bpObserver: BreakpointObserver) {
        this.breakpoint$ = bpObserver.observe([
            Breakpoints.HandsetLandscape,
            Breakpoints.HandsetPortrait,
            Breakpoints.TabletPortrait,
            Breakpoints.TabletLandscape,
            Breakpoints.Web
        ]);

        this.breakpoint$.subscribe(result => {
            this._currentMediaState = result;
            console.log(this._currentMediaState);
        })
    }

    public getCurrentMediaState() : BreakpointState {
        return this._currentMediaState;
    }

    // Public API
    public isMobile() : boolean {
        return this.bpObserver.isMatched(Breakpoints.Handset);
    }

    public isMobilePortrait() : boolean {
        return this.bpObserver.isMatched(Breakpoints.HandsetPortrait);
    }

    public isMobileLandscape() : boolean {
        return this.bpObserver.isMatched(Breakpoints.HandsetLandscape);
    }

    public isTablet() : boolean {
        return this.bpObserver.isMatched(Breakpoints.Tablet);
    }

    public isTabletPortrait() : boolean {
        return this.bpObserver.isMatched(Breakpoints.TabletPortrait);
    }

    public isTabletLandscape() : boolean {
        return this.bpObserver.isMatched(Breakpoints.TabletLandscape);
    }

    public isPortrait() : boolean {
        return this.bpObserver.isMatched([Breakpoints.TabletPortrait, Breakpoints.HandsetPortrait]);
    }

    public isLandscape() : boolean {
        return this.bpObserver.isMatched([Breakpoints.TabletLandscape, Breakpoints.HandsetLandscape]);
    }
}