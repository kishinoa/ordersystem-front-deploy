import OrderListComponent from "@/components/OrderListComponent.vue";
import OrderCart from "@/views/OrderCart.vue";


export const orderRouter = [
    {
        path: "/order/list",
        name: "OrderList",
        component: OrderListComponent,
        props:{pageTitle: "주문목록", isMyPage: false}
    },
    {
        path: "/order/cart",
        name: "OrderCart",
        component: OrderCart,
    },
]