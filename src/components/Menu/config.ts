import { MenuEntry } from '@rugdoc/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: 'https://exchange.rugdoc.io/#/swap',
      },
      {
        label: t('Liquidity'),
        href: 'https://exchange.rugdoc.io/#/pool',
      },
      {
        label: t('LP Migration'),
        href: 'https://v1exchange.rugdoc.io/#/migrate',
      },
      {
        label: t('V1 Liquidity (Old)'),
        href: 'https://v1exchange.rugdoc.io/#/pool',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Prediction (BETA)'),
    icon: 'PredictionsIcon',
    href: '/prediction',
  },
  {
    label: t('Lottery'),
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: t('Collectibles'),
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: t('Team Battle'),
    icon: 'TeamBattleIcon',
    href: '/competition',
  },
  {
    label: t('Teams & Profile'),
    icon: 'GroupsIcon',
    items: [
      {
        label: t('Leaderboard'),
        href: '/teams',
      },
      {
        label: t('Task Center'),
        href: '/profile/tasks',
      },
      {
        label: t('Your Profile'),
        href: '/profile',
      },
    ],
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    items: [
      {
        label: t('Overview'),
        href: 'https://rugdoc.info',
      },
      {
        label: t('Tokens'),
        href: 'https://rugdoc.info/tokens',
      },
      {
        label: t('Pairs'),
        href: 'https://rugdoc.info/pairs',
      },
      {
        label: t('Accounts'),
        href: 'https://rugdoc.info/accounts',
      },
    ],
  },
  {
    label: t('IFO'),
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.rugdoc.io/contact-us',
      },
      {
        label: t('Voting'),
        href: 'https://voting.rugdoc.io',
      },
      {
        label: t('Github'),
        href: 'https://github.com/rugdoc',
      },
      {
        label: t('Docs'),
        href: 'https://docs.rugdoc.io',
      },
      {
        label: t('Blog'),
        href: 'https://rugdoc.medium.com',
      },
      {
        label: t('Merch'),
        href: 'https://rugdoc.creator-spring.com/',
      },
    ],
  },
]

export default config
