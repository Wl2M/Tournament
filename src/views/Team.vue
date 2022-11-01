<template>
    <div>
        <div class="grid">
            
            <div v-for="(g, index) in teams" :key="index" class="card">
                <img class="LogoTeam" :src="g.LogoTeam" />
                <tr class="Name">{{ g.TeamName }}</tr>
                <tr>member : {{ g.member1 }}</tr> 
                <tr>member : {{ g.member2 }}</tr>
                <tr>member : {{ g.member3 }}</tr>
                <tr>member : {{ g.member4 }}</tr>
                <tr>member : {{ g.member5 }}</tr>
                
            </div>
            
        </div>
    </div>
</template>



















<script>
import axios from "axios";
export default {
    data() {
        return {
            teams: []
        }
    },
    methods: {
        async getName() {
            const response = await axios.get("http://localhost:3000/team");
            console.log(response);
            this.teams = response.data;
        },

    },
    mounted() {
        this.getName()
    },
}
</script>


<style scoped >
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    gap: 15px;
    margin-top: 20px;
    margin-left:25px;
}

.card {
    width: 320px;
    min-height: 100px;
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
.card:hover{
    transform: scale(1.01);
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
            0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.LogoTeam{
    width: 50px;
    position: absolute;
    right: 20px;
    bottom: 20px;
}
.Name{
    font-size: 30px;
    color:gold;
}


</style>