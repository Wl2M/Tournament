<template>
    <div>
    
        







    </div>
</template>
<style>
.item{
    width: 320px;
    min-height: 100px;
    background: rgb(60, 62, 68);
    border-radius: 20px;
    overflow: hidden;
    padding: 10px 15px;
    transition: all 0.2s linear;
    color: white;
    text-align: left;
    position: relative;
}
.item-2{
    color: #242424;
    background-color: #1bbefe; 
    box-sizing: border-box;
    align-items: center;
}
.grid-Table{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border: 1px solid black
}
.top{
    padding-bottom: 10px;
    border-bottom: 1px solid white;
}
.LogoTable{
    width:20px;
    padding-bottom:20px;
}
.Table-content{
    font-size: 20px;
    box-sizing: border-box;
    margin-bottom: 20px;
    border: 1px solid white;
}
</style>

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