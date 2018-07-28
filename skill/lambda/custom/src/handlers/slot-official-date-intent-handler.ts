import * as Clova from '@line/clova-cek-sdk-nodejs';
import * as Util from 'util';
import { RequestHandler } from '../extension/clova-extension-client';
import { createUtterance } from '../factories/utterance-factory';
import { LoggerFactory } from '../helpers/logger-factory';

/**
 * CLOVA.OFFICIALDATE インテントハンドラ
 */
export const SlotOfficialDateIntentHandler: RequestHandler = {
  /**
   * 実行判定
   * @param handlerInput ハンドラ
   */
  canHandle(handlerInput: Clova.Context) {
    return (
      handlerInput.getIntentName() === 'SlotOfficialDateIntent'
    );
  },
  /**
   * ハンドラ実行
   * @param handlerInput ハンドラ
   */
  handle(handlerInput: Clova.Context) {
    if (handlerInput.requestObject.request.type === 'IntentRequest') {
      // トレースログ
      LoggerFactory.instance.trace(Util.inspect(handlerInput.requestObject.request.intent.slots, { depth: null }));
    }

    // スロット収集
    const customSlot = handlerInput.getSlot('officialDate');

    let speechText: string;

    speechText = String(customSlot);

    // レスポンス設定
    handlerInput
      .setSimpleSpeech(Clova.SpeechBuilder.createSpeechText(speechText))
      .setSimpleSpeech(Clova.SpeechBuilder.createSpeechText(speechText), true);
  }
};
