import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'RugDoc',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by RugDoc), NFTs, and more, on a platform you can trust.',
  image: 'https://rugdoc.io/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('RugDoc')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('RugDoc')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('RugDoc')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('RugDoc')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('RugDoc')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('RugDoc')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('RugDoc')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('RugDoc')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('RugDoc')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('RugDoc')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('RugDoc')}`,
      }
    default:
      return null
  }
}
