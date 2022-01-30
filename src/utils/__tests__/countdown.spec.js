import Countdown from '../countdown'

const wedding_date = '2022-06-11'

describe('HelloWorld', () => {
    it('returns an object with the remaining time', () => {
        jest
            .useFakeTimers()
            .setSystemTime(new Date('2022-01-01').getTime());
    
        const CountdownTest = new Countdown(wedding_date)
    
        expect(CountdownTest.getCountdown()).toStrictEqual({
            days: '161',
            hours: '00',
            minutes: '00',
            seconds: '00'
        })
    })

    it('returns an empty object when date has passed', () => {
        jest
            .useFakeTimers()
            .setSystemTime(new Date('2022-07-01').getTime());
    
        const CountdownTest = new Countdown(wedding_date)
    
        expect(CountdownTest.getCountdown()).toStrictEqual({
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
        })
    })

    it('sends fallback when no date is setted', () => {
        jest
            .useFakeTimers()
            .setSystemTime(new Date('2022-01-01').getTime());
    
        const CountdownTest = new Countdown()
    
        expect(CountdownTest.getCountdown()).toStrictEqual({
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
        })
    })
})
