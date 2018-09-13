import axios from 'restyped-axios';
import { ApiDto } from './dto';
import { IExchangeRatesApi } from './exchange-rates-api';

export class NBPExchangeRatesApi implements IExchangeRatesApi {
    private readonly baseUrl: string = 'http://api.nbp.pl';
    private readonly lastRates: number = 2;

    async getExchangeRates(code: string): Promise<ApiDto.ExchangeRatesSeries> {
        let rest = axios.create({ baseURL: this.baseUrl });
        let res = await rest.get(`api/exchangerates/rates/a/${code}/last/${this.lastRates}`);
        return res.data as ApiDto.ExchangeRatesSeries;
    }
}