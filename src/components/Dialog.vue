<template>
    <div v-show="show" class="overlay">


        <div class="dialog">

            <div class="dialog__content">
                <h2 class="dialog__title" v-text="title"></h2>
                <p class="dialog__description" v-text="name"></p>
                <input v-model="scrim.name" class="Input" placeholder="เพิ่มชื่อทีม" />
                <p class="dialog__description" v-text="description"></p>
                <input v-model="scrim.description" placeholder="เพิมรายละเอียดการซ้อม" />
                <p class="dialog__description" v-text="rank"></p>
                <input v-model="scrim.rank" placeholder="เพิ่มเงื่อนไขเเรงค์" />
                <p class="dialog__description" v-text="time"></p>
                <input v-model="scrim.time" placeholder="เพิ่มเวลาที่ต้องการซ้อม" />
            </div>

            <hr />

            <div class="dialog__footer">
                <button @click="cancel" class="dialog__cancel">ยกเลิก</button>
                <button @click="addSign(); confirm();" class="dialog__confirm">ตกลง</button>
            </div>

        </div>

    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            scrim: {
                name: null,
                description: null,
                rank: null,
                time: null,
            }
        }

    },
    props: ['show', 'title', 'name', 'cancel', 'confirm', 'description', 'rank', 'time'],
    methods: {
        async addSign() {
            {
                const body = {
                    name: this.scrim.name,
                    description: this.scrim.description,
                    rank: this.scrim.rank,
                    time: this.scrim.time,
                }
                const res = await axios.post("http://localhost:3000/scrim", body);
                console.log(res);
                window.location.reload();
            }
        },
        async getName() {
            const response = await axios.get("http://localhost:3000/scrim");
            console.log(response);
            this.scrim = response.data;
        },
    },
    mounted() {
        this.getName();
    },

}
</script>
