import * as Clova from '@line/clova-cek-sdk-nodejs';
import { ClovaExtensionClient } from '../extension/clova-extension-client';
import * as Handlers from '../handlers';

export const intentHandlers = async (responseHelper: Clova.Context) => {
  const clova = new ClovaExtensionClient()
    .addRequestHandlers(
      Handlers.GuideIntentHandler,
      Handlers.SlotCurrencyIntentHandler,
      Handlers.SlotDateTimeIntentHandler,
      Handlers.SlotDurationIntentHandler,
      Handlers.SlotJpAddressKenIntentHandler,
      Handlers.SlotJpAddressKuIntentHandler,
      Handlers.SlotJpAddressShiIntentHandler,
      Handlers.SlotMoneyIntentHandler,
      Handlers.SlotNumberIntentHandler,
      Handlers.SlotOfficialDateIntentHandler,
      Handlers.SlotOrderIntentHandler,
      Handlers.SlotRelativeTimeIntentHandler,
      Handlers.SlotUnitIntentHandler,
      Handlers.SlotWorldCityIntentHandler,
      Handlers.SlotWorldCountryIntentHandler,
      Handlers.UnhandledHandler
    ).addErrorHandlers(
      Handlers.ErrorHandler
    );

  await clova.invoke(responseHelper);
};
