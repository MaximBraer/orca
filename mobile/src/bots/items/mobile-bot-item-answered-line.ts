// A question's recorded answer, as the phone's Activity shows it under the question.
import type { BotItemEvent } from '../../../../src/shared/bots/bot-items'
import type { Translate } from '../../i18n/mobile-i18n'

export function mobileBotItemAnsweredLine(t: Translate, answer: BotItemEvent): string {
  const text = typeof answer.data.text === 'string' ? answer.data.text : ''
  return `${t('bots.items.ask.youAnswered', 'You answered:')} ${text}`
}
