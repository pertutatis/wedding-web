interface ICountdown {
    dateEnd: string
    getCountdown(): ICountdownResponse
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
        const MILLISECONDS_DIFFERENCE:number = this.getMillisecondsDifference(this.dateEnd)
    
        const remainingDays:number = Math.round(MILLISECONDS_DIFFERENCE / 1000 / 60 / 60 / 24)
        const remainingHours:number = Math.round(MILLISECONDS_DIFFERENCE / 1000 / 60 / 60 % 24)
        const remainingMinutes:number = Math.round(MILLISECONDS_DIFFERENCE / 1000 / 60 % 60)
        const remainingSeconds:number = Math.round(MILLISECONDS_DIFFERENCE / 1000 % 60)
    
        return {
            days: this.formatNumber(remainingDays),
            hours: this.formatNumber(remainingHours),
            minutes: this.formatNumber(remainingMinutes),
            seconds: this.formatNumber(remainingSeconds)
        }
    }
    
    private formatNumber (number:number) : string {
        if (number < 0 || Number.isNaN(number)) return '00'

        const isTwoDigits:boolean = number > 9
        const numberStringified:string = number.toString()
        
        return isTwoDigits ? numberStringified : '0' + numberStringified
    }
    
    private getMillisecondsDifference(dateEnd:string) : number {
        const COUNT_END:number = Date.parse(new Date(dateEnd).toString())
        const NOW:number = Date.parse(new Date().toString())
        return COUNT_END - NOW
    }
}
