<template>
    <div>
        <div class="mt-10 text-center">
            <button @click="showDialog = true" class="button-Create">Create Sign</button>
        </div>

        <Dialog :show="showDialog" :cancel="cancel" :confirm="confirm" title="สร้างป้ายชื่อทีมซ้อม" name="ชื่อทีม"
            description="รายละเอียด" rank="เเรงค์" time="เวลา" />



        <div class="grid">
        <div v-for="(g, index) in scrim" :key="index" class="card">
            <button class="Delete" @click="deleteSign(g._id);">Delete</button>
            <p class="content">{{ g.name }} <br>
                รายละเอียดการซ้อม : {{ g.description }}<br>
                เเรงค์ : {{ g.rank }}<br>
                เวลา : {{ g.time }}
            </p>
            <button class="Scrim" @click="deleteSign(g._id); onClickBot();">Scrim</button>
        </div>
        </div>


        <notificationGroup group="top" position="bottom">
            <div class="fixed inset-x-0 bottom-0 flex px-4 py-6 pointer-events-none p-6 items-start justify-end">
                <div class="max-w-sm w-full">
                    <notification v-slot="{ notifications }">
                        <div class="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4"
                            v-for="notification in notifications" :key="notification.id">
                            <div class="flex justify-center items-center w-12 bg-green-500">
                                <svg class="h-6 w-6 fill-current text-white" viewBox="0 0 40 40"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z">
                                    </path>
                                </svg>
                            </div>
        
                            <div class="-mx-3 py-2 px-4">
                                <div class="mx-3">
                                    <span class="text-green-500 font-semibold">{{ notification.title }}</span>
                                    <p class="text-gray-600 text-sm">{{ notification.text }}</p>
                                </div>
                            </div>
                        </div>
                    </notification>
                </div>
            </div>
        </notificationGroup>












    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Dialog from '../components/Dialog.vue';
import EventCard from '../components/EventCard.vue'
Vue.use(VueAxios, axios)
export default {
    name: 'Scrim',
    components: {
        Dialog,
        EventCard
    },
    data() {
        return {
            showDialog: false,
            scrim: [],
        }
    },
    methods: {
        cancel() {
            console.log('cancel');
            this.showDialog = false;
        },

        confirm() {
            console.log('confirm');
            this.showDialog = false;
        },
        async getName() {
            const response = await axios.get("http://localhost:3000/scrim");
            console.log(response);
            this.scrim = response.data;
        },
        deleteSign(id){
             axios.delete("http://localhost:3000/scrim/"+id).then((result)=>{
                this.getName();
                console.log(result)
            })
        },
        onClickBot() {
            this.$notify(
                {
                    group: "top",
                    title: "มีคนของซ้อมทีม",
                    text: "There are people who want to train the team with you."
                },
                4000
            );
        }
        
        
    },
    mounted() {
        this.getName()
    },












}
</script>

<style scoped src="tailwindcss/dist/tailwind.css"></style>

<style>
@import url("//fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");
.Delete {
    position: absolute;
    right: 10px;
    cursor: pointer;
}
.Scrim {
    position: absolute;
        left: 35px;
        cursor: pointer;
}

.button-Create {
    --tw-bg-opacity: 1;
    background-color: rgba(37, 99, 235, var(--tw-bg-opacity));
    border-radius: 0.75rem;
    font-weight: 500;
    margin-right: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1rem;
    padding-right: 1rem;
    --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    --tw-text-opacity: 1;
    color: rgba(255, 255, 255, var(--tw-text-opacity));
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.button-Create:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(30, 64, 175, var(--tw-bg-opacity));
    --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.btn:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
    --tw-ring-opacity: 1;
    --tw-ring-color: rgba(37, 99, 235, var(--tw-ring-opacity));
    --tw-ring-opacity: 0.5;
}

.overlay {
    --tw-bg-opacity: 1;
    background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
    --tw-bg-opacity: 0.5;
    height: 100%;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 10;
}

.dialog {
    --tw-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
    border-radius: 0.75rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2.5rem;
    max-width: 100%;
    width: 24rem;
}

.dialog__content {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.dialog__title {
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-bottom: 0.5rem;
    --tw-text-opacity: 1;
    color: rgba(17, 24, 39, var(--tw-text-opacity));
}

.dialog__description {
    text-align: left;
    font-size: 20px;
    line-height: 1.25rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    --tw-text-opacity: 1;
    color: rgba(107, 114, 128, var(--tw-text-opacity));
}


.dialog__footer {
    display: flex;
    justify-content: flex-end;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.dialog__cancel {
    border-radius: 0.75rem;
    font-weight: 500;
    margin-right: 1rem;
}

.dialog__cancel:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
}

.dialog__cancel {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1rem;
    padding-right: 1rem;
}

.dialog__cancel:focus {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
    --tw-ring-opacity: 1;
    --tw-ring-color: rgba(75, 85, 99, var(--tw-ring-opacity));
    --tw-ring-opacity: 0.5;
}

.dialog__cancel {
    --tw-text-opacity: 1;
    color: rgba(17, 24, 39, var(--tw-text-opacity));
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.dialog__cancel:hover {
    --tw-text-opacity: 1;
    color: rgba(55, 65, 81, var(--tw-text-opacity));
}

.dialog__confirm {
    --tw-bg-opacity: 1;
    background-color: rgba(254, 226, 226, var(--tw-bg-opacity));
    border-radius: 0.75rem;
    font-weight: 500;
    margin-right: 1rem;
}

.dialog__confirm:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
}

.dialog__confirm {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1rem;
    padding-right: 1rem;
}

.dialog__confirm:focus {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
    --tw-ring-opacity: 1;
    --tw-ring-color: rgba(220, 38, 38, var(--tw-ring-opacity));
    --tw-ring-opacity: 0.5;
}

.dialog__confirm {
    --tw-text-opacity: 1;
    color: rgba(220, 38, 38, var(--tw-text-opacity));
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.dialog__confirm:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(252, 165, 165, var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgba(153, 27, 27, var(--tw-text-opacity));
}



.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 15px;
    margin-top: 20px;
    margin-left: 25px;
}

.card {
    width: 320px;
    min-height: 150px;
    background: rgb(60, 62, 68);
    border-radius: 20px;
    overflow: hidden;
    padding: 10px 15px;
    margin-bottom: 24px;
    margin-right: 10px;
    transition: all 0.2s linear;
    color: white;
    text-align: left;
    position: relative;
    align-items: center;
}

.card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
        0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.content{
    padding: 20px;
    color:#5ED1E1;
}
</style>