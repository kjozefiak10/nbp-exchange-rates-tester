export namespace ApiDto {
    export interface Rate {
        effectiveDate: Date;
        mid: number;
    }

    export interface ExchangeRatesSeries {
        table: string;
        currency: string;
        code: string;
        rates: Rate[];
    }
}