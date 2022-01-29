interface ICountdown {
    dateEnd: string;
    getCountdown(): ICountdownResponse;
    formatNumber(number:number): string;
    getMillisecondsDifference(dateEnd:string): number;
}

interface ICountdownResponse {
    days: string
    hours: string
    minutes: string
    seconds: string
}

export default class countdown implements ICountdown {
    dateEnd:string
    constructor(dateEnd:string) {
        this.dateEnd = dateEnd;
    }

    getCountdown () : ICountdownResponse {
        const MILLISECONDS_DIFFERENCE:number = this.getMillisecondsDifference('2022-06-11')
    
        const innerDay:number = Math.round(MILLISECONDS_DIFFERENCE / 1000 / 60 / 60 / 24);
        const hr:number = Math.round(MILLISECONDS_DIFFERENCE / 1000 / 60 / 60 % 24);
        const min:number = Math.round(MILLISECONDS_DIFFERENCE / 1000 / 60 % 60);
        const sec:number = Math.round(MILLISECONDS_DIFFERENCE / 1000 % 60);  
    
        return {
            days: this.formatNumber(innerDay),
            hours: this.formatNumber(hr),
            minutes: this.formatNumber(min),
            seconds: this.formatNumber(sec)
        }
    }
    
    formatNumber (number:number) : string {
        const isTwoDigits:boolean = number > 9
        const numberStringified:string = number.toString()
        
        return isTwoDigits ? numberStringified : '0' + numberStringified
    }
    
    getMillisecondsDifference(dateEnd:string) : number {
        const COUNT_END:number = Date.parse(new Date(dateEnd).toString());
        const NOW:number = Date.parse(new Date().toString());
        return COUNT_END - NOW;
    }
}
