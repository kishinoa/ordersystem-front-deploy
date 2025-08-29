import MemberCreate from "@/views/MemberCreate.vue";
import MemberDatailComponent from "@/components/MemberDetailComponent.vue";
import MemberList from "@/components/MemberListComponent.vue";
import MemberLogin from "@/views/MemberLogin.vue";
import MyPage from "@/views/MyPage.vue";


export const memberRouter = [
    {
        path: "/member/create",
        name: "MemberCreate",
        component: MemberCreate
    },
    {
        path: "/member/login",
        name: "MemberLogin",
        component: MemberLogin
    },
    {
        path: "/member/list",
        name: "MemberList",
        component: MemberList
    },
    {
        path: "/member/detail/:id",
        name: "MemberDetailComponent",
        component: MemberDatailComponent,
        props: {pageTitle: "회원상세정보", isMyPage: false}
    },
    {
        path: "/member/mypage",
        name: "MyPage",
        component: MyPage
    },
]