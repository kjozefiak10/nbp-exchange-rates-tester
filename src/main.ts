import { TestTask } from './nbp-exchange-rates';
declare var $: any;

let container = $('#waluty');

TestTask.NBPExchangeRates.Render(container, 'USD', 'CHF', 'EUR', 'CZK');