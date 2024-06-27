import { createRouter, createWebHistory } from 'vue-router';
import AuctionPage from '@/views/AuctionPage.vue';
import RevealPage from "@/views/RevealPage.vue";
import FinalPage from "@/views/FinalPage.vue";
import ProductDetails from "@/views/ProductDetails.vue";
import ContactUs from "@/views/ContactUs.vue";
import AddWallet from "@/views/addWallet.vue";
import HelpCenter from "@/views/HelpCenter.vue";
import CreateCollection from "@/views/CreateCollection.vue";

const routes = [
    {
        path: '/auction',
        name: 'Auction',
        component: AuctionPage
    },
    {
        path: '/reveal',
        name: 'Reveal',
        component: RevealPage
    },
    {
        path: '/final',
        name: 'Final',
        component: FinalPage
    },
    {
        path: '/product/:blockchainId',
        name: 'ProductDetails',
        component: ProductDetails
    },
    {
        path: '/contact',
        name: 'ContactUs',
        component: ContactUs
    },
    {
        path: '/add-wallet',
        name: 'AddWallet',
        component: AddWallet
    },
    {
        path: '/help',
        name: 'HelpCenter',
        component: HelpCenter
    },
    {
        path: '/create',
        name: 'CreateCollection',
        component: CreateCollection
    }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
