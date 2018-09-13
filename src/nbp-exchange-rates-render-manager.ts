import { IExchangeRatesApi } from './api/exchange-rates-api';
import { CourseRate } from './course-rate';

// Ta klasa ma za dużo odpowiedzialności.
export class NBPExchangeRatesRenderManager {
    private readonly ratesApi: IExchangeRatesApi;

    constructor(ratesApi: IExchangeRatesApi) {
        this.ratesApi = ratesApi;
    }

    renderRates(container: any, ...codes: string[]) {
        codes.forEach(async (code) => {
            let course = await this.getCourses(code);
            NBPExchangeRatesRenderManager.buildRateContainer(container, course);
        });
    }

    private async getCourses(code: string) {
        let exchangeRate = await this.ratesApi.getExchangeRates(code);
        let trend: number = exchangeRate.rates[0].mid - exchangeRate.rates[1].mid;
        let asc: boolean = trend === 0 ? null : (trend > 0);
        let course: CourseRate = new CourseRate(exchangeRate.code, exchangeRate.rates[1].mid, asc);
        return course;
    }

    private static buildRateContainer(container: any, rate: CourseRate) {
        container.append(`
            <div class='exchangerate'>
                <div class='currency currency-${rate.code}'><span>${rate.code}<span></div>
                <div class='rate${rate.asc === null ? '' : ( rate.asc === true ? '-asc' : '-desc')}'>${rate.rate}</div>
            </div>
        `);
    }
}