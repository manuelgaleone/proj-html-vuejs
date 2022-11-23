import {reactive} from 'vue'

export const longcarouseldata = reactive({
    longCarouselElements:[
        {
            name: "Choco Chips Cookies",
            tipo: "Biscotti",
            prezzo: "$19.00 - $25.00",
            img:"../src/assets/img/choco-chip-cookies-400x510.jpg",
            active: true
        },
        {
            name: "Strawberry Jam Cookies",
            tipo: "Biscotti",
            prezzo: "$23.00 - $29.00",
            img:"../src/assets/img/strawberry-jam-cookies-400x510.jpg",
            active: true
        },
        {
            name: "Strawberry Donut",
            tipo: "Ciambelline",
            prezzo: "$13.00 - $29.00",
            img:"../src/assets/img/strawberry-donut-400x510.jpg",
            active: true
        },
        {
            name: "Perfect Macarons",
            tipo: "Biscotti",
            prezzo: "$23.00 - $29.00",
            img:"../src/assets/img/perfect-macarons-400x510.jpg",
            active: true
        }
        ]
})

