import { NBPExchangeRatesApi } from './api/nbp-exchange-api';
import { NBPExchangeRatesRenderManager } from './nbp-exchange-rates-render-manager';

export namespace TestTask {

    export class NBPExchangeRates {
        static Render(container: any, ...codes: string[]) {
            // Utworzenie instancji NBPExchangeRatesApi tutaj to trochę słabe, ale kod jest gotowy na DI.
            let renderManager: NBPExchangeRatesRenderManager = new NBPExchangeRatesRenderManager(new NBPExchangeRatesApi());
            renderManager.renderRates(container, ...codes);
        }
    }
}