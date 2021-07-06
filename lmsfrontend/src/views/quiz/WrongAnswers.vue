<template>
    <div class="page">
        <div class="page-content">
            
            <!-- <ul>
            <li v-for="value in the_wrong_answers" :key="value">
                {{value}}
            </li>
            </ul> -->
            <div class="card-listing row w-100 cards px-2">
                <div class="card question-card mt-4 col-md-12 col-lg-12" v-for="(qa, index) in question" :key="qa.id">
                    <p v-html="`${qa}`" class="card-question"></p>
                    <div class="answer-row">
                        <div class="tick">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="15px" height="15px" viewBox="0 0 1280.000000 1226.000000"
                                preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,1226.000000) scale(0.100000,-0.100000)"
                                fill="#c01f3a" stroke="none">
                                <path d="M1374 11287 c-748 -535 -1361 -976 -1363 -980 -3 -8 953 -876 3616
                                -3285 606 -548 1100 -1002 1098 -1009 -3 -9 -4304 -5395 -4513 -5650 l-34 -43
                                143 51 c144 51 254 77 2209 519 195 44 522 118 726 164 l371 84 1612 1473
                                c887 811 1616 1474 1620 1474 7 0 803 -719 3936 -3557 l580 -526 3 65 c3 56 5
                                63 18 52 8 -6 16 -10 17 -8 2 2 88 303 191 669 103 366 223 788 266 937 l77
                                273 -362 422 c-2246 2625 -2875 3362 -2875 3367 0 3 920 847 2045 1875 l2045
                                1869 -93 64 c-50 34 -778 530 -1617 1102 -1109 755 -1528 1036 -1538 1028 -9
                                -7 -33 8 -88 53 -63 53 -78 60 -89 49 -7 -8 -643 -803 -1414 -1766 -770 -964
                                -1404 -1753 -1409 -1752 -4 0 -34 33 -68 72 -54 64 -943 1103 -2582 3020 -305
                                356 -557 647 -562 647 -4 0 -62 -43 -130 -96 -68 -53 -126 -91 -129 -86 -7 10
                                -343 402 -345 402 0 0 -613 -438 -1362 -973z"/>
                                </g>
                            </svg>
                        </div>
                        <p class="user-answer">{{answer[index]}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WrongAnswers',
    data(){
        return {
            question: Object.keys(this.$route.params),
            answer: Object.values(this.$route.params)
        }
    },
    methods:{

        function_wrong(){
        },
        checkparams(){
            this.$loading(false)
        },
    },
    beforeMount(){
        this.$loading(true)
        this.checkparams();
        this.function_wrong()
    }
}
</script>

<style scoped>
.card-listing{
    margin: auto;
}

.question-card{
    padding: 15px 15px;
    border-radius: 18px !important;
    -webkit-box-shadow: 2px 3px 20px 5px rgba(0,0,0,0.10); 
    box-shadow: 2px 3px 20px 5px rgba(0,0,0,0.10);
    border: 0.5px solid rgba(0,0,0,0.10);
    /* max-width: 500px; */
}

.answer-row{
    display: flex;
}

.answer-row svg,
.answer-row p{
    margin: auto 3px;
}

.tick{
    margin: auto 0;
}

@media (min-width: 768px)  {
    .question-card{
        max-width: 700px;
        margin: auto;
    }
}
</style>