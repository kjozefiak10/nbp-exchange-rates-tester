import { ApiDto } from './dto';

export interface IExchangeRatesApi {
    getExchangeRates(code: string): Promise<ApiDto.ExchangeRatesSeries>;
}