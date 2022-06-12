<template>
    <v-card :class="cardClasses" :max-width="cardMaxWidth">
        <div @click="clickOnBody" class="custom-body">
            <v-img class="custom-card-image" :class="imgClasses" :src="img"></v-img>
            <v-card-title class="custom-card-title" :class="cardTitleClasses">{{ title }}</v-card-title>
            <v-card-subtitle :class="cardSubtitleClasses" class="custom-card-price">
                {{ currencySymbol }} {{ subtitle }}
            </v-card-subtitle>
    
            <v-card-text :class="cardTextClasses">
                <span class="custom-subDesc">{{ subDesc }}</span>
                <div class="custom-desc">{{ truncate(desc) }}</div>
            </v-card-text>
        </div>

        <v-card-actions v-if="showBtn">
            <v-btn @click="clickOnBtn" :color="btnTextColor" text>
                {{ btnText }}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        currencySymbol: {
            type: String,
            default: "₹"
        },
        title: {
            type: String,
            default: "This is title"
        },
        subtitle: {
            type: String,
            default: "This is sub-title"
        },
        showBtn: {
            type: Boolean,
            default: true
        },
        desc: {
            type: String,
            default: "This is description"
        },
        subDesc: {
            type: String,
            default: "This is sub-description"
        },
        btnText: {
            type: String,
            default: "Submit"
        },
        btnTextColor: {
            type: String,
            default: "orange"
        },
        cardClasses: {
            type: String,
            default: ""
        },
        cardTextClasses: {
            type: String,
            default: ""
        },
        cardTitleClasses: {
            type: String,
            default: ""
        },
        cardSubtitleClasses: {
            type: String,
            default: ""
        },
        img: {
            type: String,
            default: "https://www.hopkinsmedicine.org/-/media/feature/noimageavailable.ashx"
        },
        imgClasses: {
            type: String,
            default: "align-end"
        },
        cardMaxWidth: {
            type: String,
            default: "300"
        },
        truncateLength: {
            type: Number,
            default: 10
        }
    },
    methods: {
        truncate(text) {
            return `${text.substring(0, this.truncateLength)}...`;
        },
        clickOnBody() {
            this.$emit('click1');
        },
        clickOnBtn() {
            this.$emit('click2');
        }
    }
}
</script>

<style scoped>
.custom-body { 
    cursor: pointer;
}
.custom-subDesc {
    font-style: italic;
    color: orange;
}

.v-card-actions {
    justify-content: flex-end;
}

.v-img.custom-card-image {
    height: 300px !important;
}

.v-card-title.custom-card-title {
    width: 250px;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.v-card-subtitle.custom-card-price {
    font-size: 1.5rem;
}

.custom-description {
    width: 300px;
}
</style>