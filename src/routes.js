import FlashSales from './components/flash-sales/FlashSales.vue';
import Vouchers from './components/vouchers/Vouchers.vue';
import TreasureHunt from './components/treasure-hunt/TreasureHunt.vue'

export default [
  {
    path: '/',
    redirect: '/flash-sales'
  },
  {
    path: '/flash-sales',
    component: FlashSales
  },
  {
    path: '/vouchers',
    component: Vouchers
  },
  {
    path: '/treasure-hunt',
    component: TreasureHunt
  }
]