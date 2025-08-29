<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="text-center text-h5">
                        {{ pageTitle }}
                    </v-card-title>
                    <v-card-text>
                        <v-table>
                            <tbody>
                                <tr><td>ID : </td><td>{{ result.id }}</td></tr>
                                <tr><td>이름 : </td><td>{{ result.name }}</td></tr>
                                <tr><td>이메일 : </td><td>{{ result.email }}</td></tr>
                            </tbody>
                        </v-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { getResultData } from '@/utils/commonDataHandler';
import axios from 'axios';

    export default{
        // 화면간에 매개변수를 넘길때 사용하는 변수값을 props라 칭함
        props: ['isMyPage', 'pageTitle'],
        data() {
            return{
                id: null,
                result: {id:null, name:null, email:null},
            }
        },
        async created() {
            if(this.isMyPage) {
                try{
                    const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/member/myinfo`);
                    const result = getResultData(response);
                    this.result = result;
                }catch(e) {
                    console.log(e);
                }
            }
            else {
                try{
                    this.id = this.$route.params.id;
                    const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/member/detail/${this.id}`);
                    const result = getResultData(response);
                    this.result = result;
                }catch(e) {
                    console.log(e);
                }
            }
            
        }
    }
</script>